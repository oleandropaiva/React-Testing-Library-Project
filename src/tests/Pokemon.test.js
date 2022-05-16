import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from './RenderWithRouter';

const { id } = pokemons[0];

describe('Teste no componente Pokemon', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    const textNamePokemon = screen.getByTestId('pokemon-name');
    expect(textNamePokemon).toHaveTextContent(/Pikachu/i);

    const textTypePokemon = screen.getByText(/fire/i);
    expect(textTypePokemon).toBeInTheDocument();
    userEvent.click(textTypePokemon);

    const fireType = screen.getByTestId('pokemon-type');
    expect(fireType).toHaveTextContent(/fire/i);

    const pokeWeight = screen.getByText('Average weight: 8.5 kg');
    expect(pokeWeight).toBeInTheDocument();

    const imagePokemon = screen.getByAltText('Charmander sprite');
    expect(imagePokemon.src).toBe('https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

  test('Teste se o card do pokémon contém um link para exibir detalhes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    expect(linkPokemon).toBeInTheDocument();
    expect(linkPokemon).toHaveAttribute('href', `/pokemons/${id}`);
  });
  test('Teste clicar no link é redirecionado para a página de detalhes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const pokelink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokelink);
    const textPokemon = screen.getByRole('heading', {
      level: 2,
      name: /Game Locations of/i });
    expect(textPokemon).toBeInTheDocument();
  });
  test('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const textTypePokemon = screen.getByText(/Dragon/i);
    expect(textTypePokemon).toBeInTheDocument();
    userEvent.click(textTypePokemon);

    const pokemonUrl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokemonUrl);
    expect(history.location.pathname).toBe('/pokemons/148');
  });
  test('Teste se existe um ícone de estrela nos pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const textTypePokemon = screen.getByText(/Dragon/i);
    expect(textTypePokemon).toBeInTheDocument();
    userEvent.click(textTypePokemon);

    const pokemonUrl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokemonUrl);

    const pokemonCheckbox = screen.getByRole('checkbox',
      { name: /Pokémon favoritado?/i });
    userEvent.click(pokemonCheckbox);

    const starAlt = screen.getByAltText('Dragonair is marked as favorite');
    expect(starAlt).toBeInTheDocument();
    expect(starAlt).toHaveAttribute('src', '/star-icon.svg');
  });
});
