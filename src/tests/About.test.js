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
