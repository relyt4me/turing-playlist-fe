import React from 'react';
import SongForm from './Song-From';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Song From Component', () => {
  it('Should have the correct content when rendered', () => {
    render(<SongForm addToPlaylist={jest.fn()} />);

    const nameLabel = screen.getByText('Song Name');
    const artistLable = screen.getByText('Song Artist');
    const linkLable = screen.getByText('Song Link');
    const inputs = screen.getAllByRole('textbox');
    const addSongButton = screen.getByRole('button', { name: 'Add Song' });

    expect(nameLabel).toBeInTheDocument();
    expect(artistLable).toBeInTheDocument();
    expect(linkLable).toBeInTheDocument();
    expect(inputs.length).toEqual(3);
    expect(addSongButton).toBeInTheDocument();
  });
});
