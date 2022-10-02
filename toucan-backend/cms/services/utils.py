from cms.models import User
import requests
from cms.models import Tokens



async def get_or_create_user(tokens: Tokens):
    """Query the Google API to return user info based on the Google access token. Create
    a new user in our DB if one does not exist."""
    response = requests.get(f"https://www.googleapis.com/oauth2/v3/userinfo?access_token={tokens.access_token}").json()
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
