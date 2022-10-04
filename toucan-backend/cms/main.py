import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from cms.db import MongoClient
from cms.models import User, ScrapbookItem
from cms.services.utils import get_or_create_user, create_or_update_scrapbook_item
from cms.services.github_client import GithubClient

SEARCH_ORIGIN_URI=os.environ.get('SEARCH_ORIGIN_URI', 'http://127.0.0.1:3000')


# TODO Add a way to stay logged into google

app = FastAPI()
origins = [ SEARCH_ORIGIN_URI ]


# TODO Restrict permissions for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
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


@app.post("/scrapbooks")
async def add_scrapbook_item(request: Request, scrapbook_item: ScrapbookItem):
    """Return a list of all the scrapbook items for a user."""
    user = await get_or_create_user(request.headers['access_token'])
    scrapbook_item = await create_or_update_scrapbook_item(user, scrapbook_item)

    github_client = GithubClient()
    data = scrapbook_item.json(include={"heading"})
    github_client.upsert_file(
        file_path=f"content-{str(scrapbook_item.id)}.json",
        file_content=data
    )
    github_client.create_pr()

    return scrapbook_item
