import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Teste no componente About', () => {
  render(<About />);
});

test('Testa se contém as infos sobre a Pokédex, e se contém dois parágrafos  ', () => {
  const about = screen.getAllByText(/pokédex/i);
  expect(about).toHaveLength(2);
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  const headingH2 = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  expect(headingH2).toBeInTheDocument();
});
