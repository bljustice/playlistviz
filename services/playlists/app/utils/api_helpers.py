import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from app import app

def _build_auth():
    key = app.config.get('APP_CLIENT_KEY')
    secret = app.config.get('APP_CLIENT_SECRET')
    credentials_manager = SpotifyClientCredentials(key, secret)
    sp = spotipy.Spotify(client_credentials_manager=credentials_manager)
    return sp

def _get_user_playlist(sp, username, playlist_id):
    try:
        playlist_data = sp.user_playlist(username, playlist_id)
        return playlist_data
    except:
        return {}

def get_audio_features(username, playlist_id):
    sp = _build_auth()
    try:
        track_ids = _get_track_ids(sp, username, playlist_id)
        return sp.audio_features(track_ids)
    except:
        return {}

def _get_track_ids(sp, username, playlist_id):
    playlist_json = _get_user_playlist(sp, username, playlist_id)
    if playlist_json:
        track_metadata = playlist_json.get('tracks').get('items')
        track_ids = map(lambda k: k['track'].get('id'), track_metadata)
        return list(track_ids)
    return []
