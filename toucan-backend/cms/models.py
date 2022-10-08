from optparse import Option
from typing import Optional
from beanie import Document, Link, PydanticObjectId
from pydantic import BaseModel




class User(Document):
    """User model for the database"""
    email:          str
    sub:            str
    given_name:     Optional[str]
    family_name:    Optional[str]
    image_url:      Optional[str]





class ScrapbookItem(Document):
    """ScrapbookItem model for the database"""
    user: Optional[Link[User]]
    title: Optional[str]
