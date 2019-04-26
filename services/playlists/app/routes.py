from app import app
from flask import jsonify
from .utils.api_helpers import get_audio_features

@app.route('/')
@app.route('/index')
def index():
    return 'Hello world'

@app.route('/api/v1/user-playlist')
def user_playlist():
    return jsonify(get_audio_features('spotify', '37i9dQZF1DWXLeA8Omikj7'))
