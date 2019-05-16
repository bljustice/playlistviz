import React from 'react';
import TopNav from './components/TopNav';
import PlaylistIdForm from './components/PlaylistIdForm';
import LoadingSpinner from './components/LoadingSpinner';
import Aggregation from './components/Aggregation';
import Radar from './components/Radar';
import SliderLogo from './components/SliderLogo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { mean, meanTimeDuration } from './utils'
const axios = require('axios');

import '../styles/main.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      playlistId: '',
      loading: false
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
        data: r.data,
        loading: false
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
    this.setState({loading: true});
    this.getAudioDetails(this.state.playlistId);
  }

  render() {
    return (
      <Container>
        <Row>
          <TopNav />
        </Row>
        <Row id="slider-logo-row">
          <Col>
          </Col>
          <Col>
            <SliderLogo />
          </Col>
          <Col>
          </Col>
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
        <LoadingSpinner loading={this.state.loading} />
        <Row id="data-row1">
          <Col>
            <Aggregation
              data={this.state.data}
              description="Average Song Duration"
              dataKey={"duration_ms"}
              func={meanTimeDuration}
            />
          </Col>
          <Col>
            <Aggregation
              data={this.state.data}
              description="Song Count"
              dataKey="count"
              func="count"
            />
          </Col>
          <Col>
            <Aggregation
              data={this.state.data}
              description="Average Tempo"
              dataKey={"tempo"}
              func={mean}
              />
          </Col>
        </Row>
        <Row id="data-row2">
          <Col>
            <Radar data={this.state.data} />
          </Col>
          <Col>
            <Aggregation
              data={this.state.data}
              description="Average Valence"
              dataKey={"valence"}
              func={mean}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
