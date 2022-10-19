import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('testa o componente App', () => {
  test('se os links no topo da página possuem os títulos Home, About e Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoriteLink).toBeInTheDocument();
  });

  test('se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('se a aplicação é redirecionada para a página About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('se a aplicação é redirecionada para a página Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('se a a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    const INVALID_URL = '/inexistente';

    act(() => {
      history.push(INVALID_URL);
    });

    const notFoundTitle = screen.getByText('Page requested not found');
    expect(notFoundTitle).toBeInTheDocument();
  });
});
