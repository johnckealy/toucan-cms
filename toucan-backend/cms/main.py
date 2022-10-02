import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from cms.db import MongoClient
from cms.models import User
from cms.models import Tokens, ScrapbookItem
from cms.services.utils import get_or_create_user
from cms.models import UserUpdateRequest


SEARCH_ORIGIN_URI=os.environ.get('SEARCH_ORIGIN_URI', 'http://127.0.0.1:3000')


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


@app.post("/scrapbook")
async def add_scrapbook_item(request: UserUpdateRequest):
    """Return a list of all the scrapbook items for a user."""
    user = await get_or_create_user(request.tokens)

    return await user.set({"scrapbook_item": request.scrapbook_item})
