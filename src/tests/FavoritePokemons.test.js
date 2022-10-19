import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
// import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('testa o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos;', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteLink);

    const noFavePokemon = screen.getByText('No favorite pokemon found');
    expect(noFavePokemon).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText('More details');
    userEvent.click(pikachuDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteLink);

    const getStar = screen.getByAltText(/is marked as favorite/i);
    expect(getStar).toBeInTheDocument();
  });
});
