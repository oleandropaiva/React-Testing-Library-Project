import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste no componente Pokedex', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    const textHeading = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(textHeading).toBeInTheDocument();
  });
  test('Testa se é exibido o próximo pokémon da lista quando o botão  é clicado', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const button = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const textButton = screen.getByText(/charmander/i);
    expect(textButton).toBeInTheDocument();
  });
  test('Teste se é mostrado apenas um pokémon por vez', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const onePokemon = screen.getByText(/Average weight/i);
    expect(onePokemon).toBeInTheDocument();
  });
});
