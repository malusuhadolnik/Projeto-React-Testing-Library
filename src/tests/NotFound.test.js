import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('', () => {
  test('Se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const h2NotFound = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(h2NotFound).toBeInTheDocument();
  });

  test('Se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const imgSRC = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imgSRC);
  });
});
