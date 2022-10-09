import os
from fastapi import FastAPI, File, UploadFile, Request, File, Form, Header
from fastapi.middleware.cors import CORSMiddleware
from cms.db import MongoClient
from cms.models import User, ScrapbookItem
from cms.services.utils import get_or_create_user, create_or_update_scrapbook_item
from cms.services.github_client import GithubClient
from typing import Union, Optional


SEARCH_ORIGIN_URI=os.environ.get('NEXTAUTH_URL', 'http://localhost:3000')


# TODO Add a way to stay logged into google

app = FastAPI()
origins = [ '*' ]


# TODO Restrict permissions for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"])


@app.on_event("startup")
async def startup():
    await MongoClient().initalizedb()


@app.get("/")
async def root():
    return {"message": f"Welcome to the untitled cms! This is the root URI."}


@app.get("/users")
async def users():
    return await User.find().to_list()


@app.get("/scrapbooks")
async def scrapbook():
    """Return a list of all the scrapbook items for a user."""
    return await ScrapbookItem.find().to_list()


@app.delete("/scrapbooks/{id}")
async def delete_item(id: str):
    github_client = GithubClient()
    github_client.delete_item('menu', id)
    return {"message": f"Deleted item {id}"}


@app.post("/upload")
async def create_upload_file(upload: UploadFile, access_token: Union[str, None] = Header(default=None, convert_underscores=False), ctype: str = Form(...), title: str = Form(...), _id: str = Form(...)):
    """Return a list of all the scrapbook items for a user."""
    user = await get_or_create_user(access_token)
    if user == 'error':
        return {'error': 'Re-login Required'}
    scrapbook_item = await create_or_update_scrapbook_item(user, title, _id)
    data = scrapbook_item.json(include={"title", "id"})

    github_client = GithubClient()
    github_client.upsert_file(
        file_path=f"public/images/{ctype}/{str(scrapbook_item.id)}/image-{upload.filename}",
        file_content=upload.file.read()
    )
    github_client.upsert_file(
        file_path=f"content/{ctype}/{str(scrapbook_item.id)}/content.json",
        file_content=data
    )
    github_client.create_pr()


@app.get("/get-published-content")
async def get_content(ctype: str):
    """Refresh the database based on the git state"""
    github_client = GithubClient()
    published_menu_data = github_client.get_content(f'content/{ctype}', published=True)
    return published_menu_data


@app.get("/get-staged-content")
async def get_content(ctype: str):
    """Refresh the database based on the git state"""
    github_client = GithubClient()
    unpublished_menu_data = github_client.get_content(f'content/{ctype}', published=False)
    return unpublished_menu_data


@app.get("/publish")
async def publish():
    github_client = GithubClient()
    github_client.merge_to_main()
    return {"message": "Changes published"}
