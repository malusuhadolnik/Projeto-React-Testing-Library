import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('testa o componente Pokedex', () => {
  // Testes avaliados pelo stryker
  test('se existe um botão de filtragem para cada tipo de pokémon, e se o texto do botão corresponde ao nome do tipo, ex. Psychic', () => {
    renderWithRouter(<App />);

    const pokemonTypeButtuns = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    expect(pokemonTypeButtuns[0]).toHaveTextContent(pokemonTypes[0]);
    expect(pokemonTypeButtuns[1]).toHaveTextContent(pokemonTypes[1]);
    expect(pokemonTypeButtuns[2]).toHaveTextContent(pokemonTypes[2]);
    expect(pokemonTypeButtuns[3]).toHaveTextContent(pokemonTypes[3]);
    expect(pokemonTypeButtuns[4]).toHaveTextContent(pokemonTypes[4]);
    expect(pokemonTypeButtuns[5]).toHaveTextContent(pokemonTypes[5]);
    expect(pokemonTypeButtuns[6]).toHaveTextContent(pokemonTypes[6]);
  });

  test('se o botão All é clicável', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
  });

  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button, exceto o botão All', () => {
    renderWithRouter(<App />);
    const pokemonTypeBtn = 'pokemon-type-button';
    const pokemonTypeButtuns = screen.getAllByTestId(pokemonTypeBtn);
    const datatestid = 'data-testid';

    expect(pokemonTypeButtuns[0]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[1]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[2]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[3]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[4]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[5]).toHaveAttribute(datatestid, pokemonTypeBtn);
    expect(pokemonTypeButtuns[6]).toHaveAttribute(datatestid, pokemonTypeBtn);

    const buttonAll = screen.getByText('All');
    expect(buttonAll).not.toHaveAttribute(datatestid, pokemonTypeBtn);
  });
  // testes não avaliados pelo stryker:
  test('se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const h2Encountered = screen.getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(h2Encountered).toBeInTheDocument();
  });

  test('se existe um botão com o texto Próximo pokémon', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[8]).toHaveTextContent('Próximo pokémon');
  });

  //   test('se, ao clicar no botão Próximo pokemon, os próximos pokémons da lista são mostrados um a um, ao clicar sucessivamente', () => {

  //   });

  //   test('se volta para o primeiro pokemon da lista após clicar botão, estando no último pokemon', () => {

  //   });

  //   test('se, à partir da seleção de um botão de tipo, a Pokédex circula somente pelos pokémons daquele tipo', () => {

  //   });

  //   test('se, ao carregar a página, o filtro selecionado é o All', () => {

//   });
});
