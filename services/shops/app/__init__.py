import os
from flask import Flask

#instantiate app
app = Flask(__name__)

#set config
app_settings = os.environ.get('APP_SETTINGS')
app.config.from_object(app_settings)

from app import routes
