import React from 'react';
import './Song-card.css';

const SongCard = ({ song }) => {
  return (
    <div className={'song-card'}>
      <h2>{song.songName}</h2>
      <h3>by {song.artistName}</h3>
      <a href={song.link}>See Video</a>
    </div>
  );
};

export default SongCard;
