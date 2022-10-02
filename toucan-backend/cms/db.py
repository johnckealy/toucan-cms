
import motor
from beanie import init_beanie
from pydantic import BaseSettings
from cms.models import User


class DBSettings(BaseSettings):
    """Base Settings for the database, note that these
    will read automatically from environment variables"""
    mongo_username: str = 'mongo'
    mongo_password: str = 'mongo'
    mongo_host: str = 'cms-db'
    mongo_port: str = '27017'


class MongoClient():
    """Client to connect to the MongoDB database."""
    def __init__(self) -> None:
        dbs = DBSettings()
        self.client = motor.motor_asyncio.AsyncIOMotorClient(
            f"mongodb://{dbs.mongo_username}:{dbs.mongo_password}@{dbs.mongo_host}:{dbs.mongo_port}"
        )

    async def initalizedb(self):
        await init_beanie(database=self.client.cms, document_models=[User])
