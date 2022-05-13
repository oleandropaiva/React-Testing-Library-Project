import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('testando se o link app.js possui o texto home', () => {
  test('primeiro link deve possuir o texto Home', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
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
