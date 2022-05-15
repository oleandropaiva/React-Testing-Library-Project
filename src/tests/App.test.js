import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testa o componente App', () => {
  test('os links devem possuir o texto Home, About, Favorite Pokémons', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const firstLink = screen.getByText(/home/i);
    expect(firstLink).toBeInTheDocument();
    const secondLink = screen.getByText(/about/i);
    expect(secondLink).toBeInTheDocument();
    const thirdLink = screen.getByText(/Favorite Pokémons/i);
    expect(thirdLink).toBeInTheDocument();
  });
});
