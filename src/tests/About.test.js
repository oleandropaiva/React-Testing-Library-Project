import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Teste no componente About', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('Testa se contém dois parágrafos e as informações sobre a Pokédex ', () => {
    const about = screen.getAllByText(/pokédex/i);
    expect(about).toHaveLength(2);
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const textH2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(textH2).toBeInTheDocument();
    const h2Level = screen.getByRole('heading', { level: 2 });
    expect(h2Level).toBeInTheDocument();
  });
  test('Teste se a página contém a imagem de uma Pokédex:', () => {
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
