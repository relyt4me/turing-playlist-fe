import React from 'react';
import SongForm from './Song-From';
import { screen, render, fireEvent } from '@testing-library/react';
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

  it('Should change the input as the form is filled out', () => {
    render(<SongForm addToPlaylist={jest.fn()} />);

    const inputForName = screen.getByPlaceholderText('Name');
    const inputForArtist = screen.getByPlaceholderText('Artist');
    const inputForLink = screen.getByPlaceholderText('Link');

    fireEvent.change(inputForName, { target: { value: 'King' } });
    fireEvent.change(inputForArtist, { target: { value: 'Years and Years' } });
    fireEvent.change(inputForLink, { target: { value: 'www.google.com' } });

    expect(inputForName.value).toBe('King');
    expect(inputForArtist.value).toBe('Years and Years');
    expect(inputForLink.value).toBe('www.google.com');
  });
});
