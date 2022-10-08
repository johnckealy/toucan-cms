from cms.models import User, ScrapbookItem
import requests
import logging

logger = logging.getLogger(__name__)


async def get_or_create_user(token: str):
    """Query the Google API to return user info based on the Google access token. Create
    a new user in our DB if one does not exist."""
    response = requests.get(f"https://www.googleapis.com/oauth2/v3/userinfo?access_token={token}").json()
    user = await User.find_one(User.sub == response.get('sub'), fetch_links=True)
    if not user:
      user = User(
          sub=response.get('sub'),
          email=response.get('email'),
          given_name=response.get('given_name'),
          family_name=response.get('family_name'),
          image_url=response.get('picture')
      )
      await user.insert()
    return user


async def create_or_update_scrapbook_item(user: User, title: str, _id: str):
    """Create or update a scrapbook item for a user."""
    try:
        old_entry = await ScrapbookItem.get(_id)
    except:
        old_entry = None
    if not old_entry:
        scrapbook_item = ScrapbookItem(
            title=title,
            user=user
        )
        scrapbook_item = await scrapbook_item.insert()
    else:
        scrapbook_item = await old_entry.set({ScrapbookItem.title: title})
    return scrapbook_item
