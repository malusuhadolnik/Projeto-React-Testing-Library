import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('testa o componente about', () => {
  test('a página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const pokedexInfo = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');

    expect(pokedexInfo).toBeInTheDocument();
  });

  test('se é exibido na tela um h2 com texto About Pokédex', () => {
    render(<About />);
    const h2About = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(h2About).toBeInTheDocument();
  });

  test('se o atributo src da imagem é', () => {
    render(<About />);
    const pokedex = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', pokedex);
    // https://stackoverflow.com/questions/6050952jestreact-native-testing-library-how-to-test-an-image-src
  });
});
