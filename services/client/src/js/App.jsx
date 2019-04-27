import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.getAudioDetails()
  }

  getAudioDetails() {
    fetch(`${process.env.REACT_APP_AUDIO_DETAILS_URL}/api/v1/user-playlist`)
      .then(r => { console.log(r.json()); })
      .catch(e => { console.log(e); });
  }

  render() {
    return (
      <div>
      <h1>This is actually working</h1>
      </div>
    );
  }
}

export default App;
