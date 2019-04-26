import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

def build_auth(client_id, client_secret):
    credentials_manager = SpotifyClientCredentials(client_id, client_secret)
    sp = spotipy.Spotify(client_credentials_manager=credentials_manager)
    return sp

def search_albums(sp, album_urn):
    try:
        album = sp.album(album_urn)
        return album
    except:
        return 'Album could not be returned'
