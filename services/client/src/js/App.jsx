import React from 'react';
import TopNav from './components/TopNav';
import PlaylistIdForm from './components/PlaylistIdForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const axios = require('axios');

import '../styles/main.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      playlistId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAudioDetails = this.getAudioDetails.bind(this)
  }

  getAudioDetails(playlistId) {
    event.preventDefault();
    
    const payload = {
      playlistId: playlistId
    }

    const serviceEndpoint = `${process.env.REACT_APP_AUDIO_DETAILS_URL}`
    const audioDetailsEndpoint = serviceEndpoint.concat('/api/v1/user-playlist')

    axios.post(audioDetailsEndpoint, payload)
      .then(r => this.setState({
        data: r.data
      }))
      .catch(error => console.log(error));
  }

  handleChange(event) {
    this.setState({
      playlistId: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getAudioDetails(this.state.playlistId);
  }

  render() {
    return (
      <Container>
        <Row>
          <TopNav />
        </Row>
        <Row id="playlist-row">
          <Col>
          </Col>
          <Col xs="6" id="playlist-id-form-col">
            <PlaylistIdForm
              value={this.state.playlistId}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
