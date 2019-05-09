import os
from flask import Flask
from flask_cors import CORS

#instantiate app
app = Flask(__name__)

#set config
app_settings = os.environ.get('APP_SETTINGS')
app.config.from_object(app_settings)

#enable CORS
CORS(app)
from app import routes
