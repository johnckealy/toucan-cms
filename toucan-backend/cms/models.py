from optparse import Option
from typing import Optional
from beanie import Document
from pydantic import BaseModel


class Tokens(BaseModel):
    """Google JWT Tokens coming from next-auth"""
    access_token: str


class ScrapbookItem(BaseModel):
    """ScrapbookItem model for the database"""
    heading: Optional[str]


class UserUpdateRequest(BaseModel):
    """User update request"""
    tokens: Tokens
    scrapbook_item: Optional[ScrapbookItem]



class User(Document):
    """User model for the database"""
    email:          str
    sub:            str
    given_name:     Optional[str]
    family_name:    Optional[str]
    image_url:      Optional[str]
    scrapbook_item: Optional[ScrapbookItem]
