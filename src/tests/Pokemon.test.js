import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('testa o componente Pokemon', () => {
// avaliados pelo stryker:
  test('se a imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);

    // teste com o Pikachu
    const imgSRC = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imgSRC);
  });

  test('se a imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    // teste com o Pikachu
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('se a imagem de favorito :star: possui o src /star-icon.svg e o alt <name> is marked as favorite', () => {
    renderWithRouter(<App />);

    const pikachuDetails = screen.getByText('More details');
    userEvent.click(pikachuDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteLink);

    const getStar = screen.getByAltText(/is marked as favorite/i);
    expect(getStar).toHaveAttribute('src', '/star-icon.svg');
    expect(getStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });

  test('se é exibido na tela um texto com o tipo do pokemon, e um href /pokemons/<id>', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[2]); // clicando no botão do tipo fogo

    const textMoreDetails = 'More details';

    const charmanderDetails = screen.getByText(textMoreDetails); // vamos ver ose detalhes do charmander <3
    userEvent.click(charmanderDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteLink);

    const charmanderType = screen.getByText('Fire');
    expect(charmanderType).toBeInTheDocument();

    const moreDetails = screen.getAllByText(textMoreDetails);
    expect(moreDetails[1]).toHaveAttribute('href', '/pokemons/4');
  });

  // não avaliadas pelo stryker:
  //   test('se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;', () => {

  //   });

  //   test('se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do pokémon cujos detalhes se deseja ver', () => {

//   });
});
