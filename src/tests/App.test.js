import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('teste se o link app.js possui o texto Home, About, Favorite Pokémons', () => {
  test('primeiro link deve possuir o texto Home, About, Favorite Pokémons', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const firstLink = screen.getByText(/home/i);
    expect(firstLink).toBeInTheDocument();
    const secondLink = screen.getByText(/about/i);
    expect(secondLink).toBeInTheDocument();
    const thirdItem = screen.getByText(/Favorite Pokémons/i);
    expect(thirdItem).toBeInTheDocument();
  });
});

/* describe('testando se o link app.js possui o texto home', () => {
  it('Renderiza o app na tela', async () => {
    render (
    <MemoryRouter>
  (<App />);
     </MemoryRouter>
    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();
  });
}); */
