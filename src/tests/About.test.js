import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
/* import App from '../App'; */
import { About } from '../components';

describe('Teste se a página contém um heading h2 com o texto About Pokédex',
  'Teste se a página contém dois parágrafos com texto sobre a Pokédex',
  'Teste se a página contém a seguinte imagem de uma Pokédex',
  () => {
    test('testando todo o componente About', () => {
      render(
        <MemoryRouter>
          <About />
        </MemoryRouter>,
      );

      const heading = screen.getByRole('heading', { name: /About Pokédex/i });
      expect(heading).toBeInTheDocument();


      const paragraph1 = screen.getByText(/This Pokédex is a collection of all the Pokémon in the world/i);
      expect(paragraph1).toBeInTheDocument();

      
      const paragraph2 = screen.getByText(/It is a collection of all the Pokémon in the world/i);
      expect(paragraph2).toBeInTheDocument();

      
      const image = screen.getByAltText(/Pokédex/i);
      expect(image).toBeInTheDocument('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    });
  });
