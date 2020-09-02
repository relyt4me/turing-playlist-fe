import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getPlaylist } from '../apiCalls';
import App from './App';
jest.mock('../apiCalls.js');

describe('App Component', () => {
  it('Should allow a user to add a song to the playlist', () => {
    getPlaylist.mockResolvedValue([]);
    render(<App />);

    const inputForName = screen.getByPlaceholderText('Name');
    const inputForArtist = screen.getByPlaceholderText('Artist');
    const inputForLink = screen.getByPlaceholderText('Link');
    const submitButton = screen.getByRole('button', { name: 'Add Song' });

    fireEvent.change(inputForName, { target: { value: 'King' } });
    fireEvent.change(inputForArtist, { target: { value: 'Years and Years' } });
    fireEvent.change(inputForLink, { target: { value: 'www.google.com' } });
    fireEvent.click(submitButton);

    const songName = screen.getByRole('heading', { name: 'King' });
    const songArtist = screen.getByRole('heading', { name: 'by Years and Years' });

    expect(songName).toBeInTheDocument();
    expect(songArtist).toBeInTheDocument();
  });
});
