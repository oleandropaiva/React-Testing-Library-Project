import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste no componente Pokemon', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  test('Teste se o nome correto do pokémon deve ser mostrado na tela', () => {
    const textNamePokemon = screen.getByRole('heading', { name: 'Charmander' });
    expect(textNamePokemon).toBeInTheDocument();
  });
  test('Testa se o tipo correto do pokémon deve ser mostrado na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const textTypePokemon = screen.getByText(/fire/i);
    expect(textTypePokemon).toBeInTheDocument();
  });
  test('Testa se o peso correto do pokémon deve ser mostrado na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const weightPokemon = screen.getByText('Average weight: 6.0 kg');
    expect(weightPokemon).toBeInTheDocument();
  });
  test('Testa se a imagem do pokémon éser exibida', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const imagePokemon = screen.getByRole('img', { name: 'Charmander sprite' });
    expect(imagePokemon.src).toBe('https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

});
