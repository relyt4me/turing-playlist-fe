import React, { Component } from 'react';
import './Song-Form.css';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      songArtist: '',
      songLink: '',
    };
  }

  render() {
    const { songName, songArtist, songLink } = this.state;
    return (
      <form className='song-form'>
        <label htmlFor='song-name'>Song Name</label>
        <input type='text' placeholder='Name' name='song-name' value={songName} />
        <label htmlFor='song-artist'>Song Artist</label>
        <input type='text' placeholder='Artist' name='song-artist' value={songArtist} />
        <label htmlFor='song-link'>Song Link</label>
        <input type='text' placeholder='Link' name='song-link' value={songLink} />
        <button>Add Song</button>
      </form>
    );
  }
}

export default SongForm;
