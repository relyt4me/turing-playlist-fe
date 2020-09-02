import React from 'react';
import Playlist from './Playlist';
import { screen, render } from '@testing-library/react';

describe('Playlist Component', () => {
  let songs;
  beforeEach(() => {
    songs = [
      {
        songName: 'Swear',
        artistName: 'Casiopea',
        link: 'https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s',
        id: 1,
      },
      {
        songName: 'Autumn Leaves',
        artistName: 'Bill Evans Trio',
        link: 'https://www.youtube.com/watch?v=r-Z8KuwI7Gc',
        id: 2,
      },
      {
        songName: 'Fair Weather',
        artistName: 'Art Farmer',
        link: 'https://www.youtube.com/watch?v=8-jfsUusSDQ',
        id: 3,
      },
    ];
  });
  it('Should have the correct content when rendered', () => {
    render(<Playlist songs={songs} />);

    const playlistHeader = screen.getByRole('heading', { name: 'My Playlist' });
    const firstSongName = screen.getByRole('heading', { name: 'Swear' });
    const secondSongArtist = screen.getByRole('heading', { name: 'by Bill Evans Trio' });
    const songLinks = screen.getAllByRole('link');

    expect(playlistHeader).toBeInTheDocument();
    expect(firstSongName).toBeInTheDocument();
    expect(secondSongArtist).toBeInTheDocument();
    expect(songLinks.length).toEqual(3);
  });
});
