import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Teste no componente NotFound', () => {
  beforeEach(() => {
    render(<NotFound />);
  });
  test('Testa se a página mostra a imagem', () => {
    const imgNotFound = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found',
    });
    expect(imgNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });

  test('Testa se heading h2 contém o texto Page requested not found 😭', () => {
    const textH2 = screen.getByRole('heading',
      /'Page requested not found 😭'/i);
    expect(textH2).toBeInTheDocument();
  });
});
