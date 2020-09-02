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

  convertAndAddSong = () => {
    const { songName, songArtist, songLink } = this.state;
    const song = { songName: songName, artistName: songArtist, link: songLink };
    this.props.addToPlaylist(song);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { songName, songArtist, songLink } = this.state;
    return (
      <form className='song-form'>
        <label htmlFor='songName'>Song Name</label>
        <input type='text' placeholder='Name' name='songName' value={songName} onChange={(event) => this.handleChange(event)} />
        <label htmlFor='songArtist'>Song Artist</label>
        <input type='text' placeholder='Artist' name='songArtist' value={songArtist} onChange={(event) => this.handleChange(event)} />
        <label htmlFor='songLink'>Song Link</label>
        <input type='text' placeholder='Link' name='songLink' value={songLink} onChange={(event) => this.handleChange(event)} />
        <button onClick={this.convertAndAddSong}>Add Song</button>
      </form>
    );
  }
}

export default SongForm;
