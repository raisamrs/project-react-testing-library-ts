import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.tsx />', () => {
  it.skip('1. A mensagem "No favorite pokemon found" deve ser exibida na tela a mensagem caso a pessoa não tenha Pokémon favorito', () => {
    renderWithRouter(<App />, { route: '/favorites' });

    const notFoundMsg = screen.getByText(/no favorite pokémon found/i);
    expect(notFoundMsg).toBeInTheDocument();
  });

  it.skip('2. Ao favoritar um pokemón através de "ver detalhes", ele deve ser exibido na página de Favoritos', async () => {
    const { user } = renderWithRouter(<App />);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    await user.click(linkDetails);

    const checkboxFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }) as HTMLInputElement;
    expect(checkboxFavorite.checked).toBe(false);
    await user.click(checkboxFavorite);
    expect(checkboxFavorite.checked).toBe(true);

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    await user.click(linkFavorite);
    const favPokemonName = screen.getByText(/pikachu/i);
    expect(favPokemonName).toBeInTheDocument();
  });
});
