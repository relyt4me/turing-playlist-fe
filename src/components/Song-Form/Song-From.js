import React, { Component } from 'react';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      songArtist: '',
      songLink: '',
    };
  }
}

export default SongForm;
