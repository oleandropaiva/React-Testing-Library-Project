import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste no componente Pokedex', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const textHeading = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(textHeading).toBeInTheDocument();
  });
});
