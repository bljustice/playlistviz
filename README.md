# Playlist Viz

## What is this?

This repo is a React frontend service coupled with a Flask backend service for visualizing Spotify playlist data.

## Getting Started Locally

### Build service images

1. Create a `.env` file in `services/client` and add the following to it. This connects the Flask service to the React service.
```
REACT_APP_AUDIO_DETAILS_URL=http://localhost:5001
```

2. Create another `.env` file in `services/playlists` with your Spotify API credentials.
```
APP_CLIENT_KEY=YOUR_CLIENT_KEY
APP_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

3. Run `./build_dev.sh` to build the service images.

4. After the build completes, run `./run_dev.sh` to spin up containers of both images.

5. The app should now be available at `http://localhost:3007`.