import React from 'react';
import SongCard from '../Song-card/Song-card'

const Playlist({songs}) => {
  const songCards = songs.map(song => {
    return (
      <SongCard song={song} key={song.id}/>
    )
  })

  return (
    <section className='playlist'>
      <h2 className='playlist-title'>My Playlist</h2>
      <div className='playlist-container'>
        {songCards}
      </div>
    </section>
  )
}

export default Playlist;