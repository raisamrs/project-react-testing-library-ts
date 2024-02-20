import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Teste o componente <Pokedex.tsx />', () => {
  it('1. A página deve conter um heading h2 com o texto "Encountered Pokémon".', () => {
    renderWithRouter(<App />);
    const titleHome = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(titleHome).toBeInTheDocument();
    expect(titleHome.tagName).toBe('H2');
  });

  it('2. Ao clicar no botão "Próximo Pokémon", o próximo pokemón deve ser exibido', async () => {
    const { user } = renderWithRouter(<App />);
    const firstPokemonName = screen.getByText(/pikachu/i);
    expect(firstPokemonName).toBeInTheDocument();

    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    await user.click(btnNextPokemon);

    const secondPokemonName = screen.getByText(/charmander/i);
    expect(secondPokemonName).toBeInTheDocument();
  });

  it('3. O mesmo pokémon deve ser exibido apenas uma vez', () => {
    renderWithRouter(<App />);
    const showedPokemons = [];
    const numberOfClicks = pokemonList.length;

    for (let i = 0; i < numberOfClicks; i += 1) {
      const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
      fireEvent.click(btnNextPokemon);
      const pokemonNameElement = screen.getByTestId('pokemon-name');
      const pokemonName = pokemonNameElement.textContent;
      expect(showedPokemons).not.toContain(pokemonName);
      showedPokemons.push(pokemonName);
    }
  });

  it('4. Deve existir um botão de filtragem para cade tipo de pokémon', () => {
    renderWithRouter(<App />);

    const btnElectric = screen.getByRole('button', { name: /electric/i });
    expect(btnElectric).toBeInTheDocument();

    const btnFire = screen.getByRole('button', { name: /fire/i });
    expect(btnFire).toBeInTheDocument();

    const btnBug = screen.getByRole('button', { name: /bug/i });
    expect(btnBug).toBeInTheDocument();

    const btnPoison = screen.getByRole('button', { name: /poison/i });
    expect(btnPoison).toBeInTheDocument();

    const btnPsychic = screen.getByRole('button', { name: /psychic/i });
    expect(btnPsychic).toBeInTheDocument();

    const btnNormal = screen.getByRole('button', { name: /normal/i });
    expect(btnNormal).toBeInTheDocument();

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeInTheDocument();
  });

  it('5. O texto do botão deve corresponder ao nome do tipo do pokémon', () => {
    const { user } = renderWithRouter(<App />);

    for (let i = 0; i < 7; i += 1) {
      const btnTypeElement = screen.getByTestId('pokemon-type-button');
      user.click(btnTypeElement);
      const btnTypeName = btnTypeElement.textContent;
      const pokemonTypeElement = screen.getByTestId('pokemon-type');
      const pokemonType = pokemonTypeElement.textContent;
      expect(btnTypeName).toEqual(pokemonType);
    }
    /*     const btnEletric = screen.getByRole('button', { name: /electric/i });
        user.click(btnEletric);
        const btnFire = screen.getByRole('button', { name: /fire/i });
        const btnBug = screen.getByRole('button', { name: /bug/i });
        const btnPoison = screen.getByRole('button', { name: /poison/i });
        const btnPsychic = screen.getByRole('button', { name: /psychic/i });
        const btnNormal = screen.getByRole('button', { name: /normal/i });
        const btnDragon = screen.getByRole('button', { name: /dragon/i }); */
  });

  it.skip('6. O botão "All" deve estar sempre visível', () => {

  });

  it.skip('7. A pokédex deve conter um botão para resetar o filtro', () => {

  });
});
