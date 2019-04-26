from app import app
from flask import jsonify
from .utils.api_helpers import get_track_ids, get_audio_features

@app.route('/')
@app.route('/index')
def index():
    return 'Hello world'

@app.route('/api/v1/user-playlist')
def user_playlist():
    track_ids = get_track_ids('spotify', '37i9dQZF1DWXLeA8Omikj7')
    return jsonify(get_audio_features(track_ids))
