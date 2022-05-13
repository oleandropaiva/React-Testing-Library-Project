import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste no componente FavoritePokemons', () => {
  test('Testa exibe uma mensagem , caso a pessoa não tenha pokémons favoritos.', () => {
    render(<FavoritePokemons />);
    const message = screen.getByText(/No favorite pokemon found/i);
    expect(message).toBeInTheDocument();
  });
});
