import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Playlist from '../Playlist/Playlist';
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
      .catch((error) => this.setState({ error: 'Something went wrong' }));
  }

  render() {
    const { songQueue, error } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Turing Playlist</h1>
        </header>
        <div className='App-background'>
          <main>
            {error && <h1>{error}</h1>}
            <Playlist songs={songQueue} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
