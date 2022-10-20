import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const textMoreDetails = 'More details';

describe('testa o componente PokemonDetails', () => {
  test('se é exibido na tela um h2 com o texto <name> Details', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const h2Details = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(h2Details).toBeInTheDocument();
  });

  test('se é exibido na tela um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const h2Summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(h2Summary).toBeInTheDocument();
  });

  test('se é exibido na tela um texto contendo <summary>', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const summaryText = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(summaryText).toBeInTheDocument();
  });

  test('se é exibido na tela um h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const h2GameLocation = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(h2GameLocation).toBeInTheDocument();
  });

  test('se são exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const pageImages = screen.getAllByRole('img');
    const map1src = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const map2src = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(pageImages[1]).toHaveAttribute('src', map1src);
    expect(pageImages[2]).toHaveAttribute('src', map2src);

    expect(pageImages[1]).not.toHaveAttribute('alt', '');
    expect(pageImages[2]).not.toHaveAttribute('alt', '');
  });

  test('se é exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText(textMoreDetails);
    userEvent.click(pikachuDetails);

    const labelFavoritado = screen.getByText('Pokémon favoritado?');
    expect(labelFavoritado).toBeInTheDocument();
  });
});
