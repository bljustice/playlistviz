import functools
from app import app
from flask import jsonify, request
from .utils.api_helpers import get_audio_features, get_playlist_cover_image

@functools.lru_cache(maxsize=30)
@app.route('/api/v1/user-playlist', methods=['POST'])
def user_playlist():
    request_json = request.get_json()
    playlist_id = request_json.get('playlistId')
    if not playlist_id:
        return jsonify({
            'error': 'Something went wrong'
        })
    return jsonify(get_audio_features('spotify', playlist_id))

@functools.lru_cache(maxsize=30)
@app.route('/api/v1/get-playlist-cover-image', methods=['POST'])
def playlist_cover_image():
    request_json = request.get_json()
    playlist_id = request_json.get('playlistId')
    if not playlist_id:
        return jsonify({
            'error': 'Something went wrong',
        })
    return jsonify(get_playlist_cover_image(playlist_id))
