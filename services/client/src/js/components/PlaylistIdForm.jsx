import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PlaylistIdForm = (props) => {
  return (
    <Form id="playlist-id-form">
      <Form.Group controlId="form-playlist-id">
        <Form.Label id="playlist-viz-header">
          <h1>Playlist Viz</h1>
        </Form.Label>
        <Form.Control
          name="playlist-id-form"
          required
          type="search"
          placeholder="Enter Playlist ID"
          value={props.value}
          onChange={props.onChange}
        />
        <Form.Text className="text-muted">
          You can locate a Spotify Playlist ID like this:
        </Form.Text>
      </Form.Group>
      <Button onClick={props.onSubmit} variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default PlaylistIdForm;
