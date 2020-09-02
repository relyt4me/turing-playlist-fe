import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getPlaylist } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      error: '',
    };
  }

  componentDidMount() {
    getPlaylist()
      .then((playlist) => {
        this.setState({ songQueue: playlist });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Turing Playlist</h1>
        </header>
        <div className='App-background'>
          <main></main>
        </div>
      </div>
    );
  }
}

export default App;
