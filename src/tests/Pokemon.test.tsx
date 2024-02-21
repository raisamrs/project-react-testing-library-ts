import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.tsx />', () => {
  it('1. Ao ser renderizado, o card do pokémon deve exibir o nome correto dele', async () => {
    const { user } = renderWithRouter(<App />);
    const btnPoison = screen.getByRole('button', { name: /poison/i });
    await user.click(btnPoison);

    const pokemonPoisonName = screen.getByText(/ekans/i);
    expect(pokemonPoisonName).toBeInTheDocument();
  });

  it('2. Ao ser renderizado, o card do pokémon deve exibir o tipo correto dele', async () => {
    const { user } = renderWithRouter(<App />);
    const btnPoison = screen.getByRole('button', { name: /poison/i });
    const btnPoisonText = btnPoison.textContent;
    await user.click(btnPoison);

    const pokemonPoisonType = screen.getByTestId('pokemon-type');
    const pokemonTypeText = pokemonPoisonType.textContent;
    expect(btnPoisonText).toEqual(pokemonTypeText);
  });

  it('3. Ao ser renderizado, o card do pokémon deve exibir o peso correto dele no formato "Average weight: x kg"', () => {
    renderWithRouter(<App />);
    const firstPokemonWeight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(firstPokemonWeight).toBeInTheDocument();
  });

  it('4. Ao ser renderizado, o card do pokémon deve exibir a imagem dele com o atributo src correto', () => {
    const { container } = renderWithRouter(<App />);
    const imgFirstPokemon = container.querySelector('.pokemon-image') as HTMLImageElement;
    expect(imgFirstPokemon.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('5. Ao ser renderizado, o card do pokémon deve exibir a imagem dele com o atributo alt correto', async () => {
    const { container } = renderWithRouter(<App />);
    let imgFirstPokemon;

    await waitFor(() => {
      imgFirstPokemon = container.querySelector('.pokemon-image') as HTMLImageElement;
      expect(imgFirstPokemon).toBeInTheDocument();
      expect(imgFirstPokemon.alt).toBe('Pikachu sprite');
    });
  });
  it('6. O card do pokémon deve conter um link de navegação chamado "More details" para exibir detalhes do pokemón', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i }) as HTMLLinkElement;
    expect(linkMoreDetails).toBeInTheDocument();
    expect(linkMoreDetails.href).toBe('http://localhost:3000/pokemon/25');
  });

  it('7. Ao clicar no link de navegação do Pokémon, deve ser feito o redirecionamento da aplicação para a página de detalhes de Pokémon.', async () => {
    const { user } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i }) as HTMLLinkElement;
    await user.click(linkMoreDetails);

    const pokemonDetailsTitle = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pokemonDetailsTitle).toBeInTheDocument();
  });

  it('8. Deve  existir um ícone de estrela nos Pokémon favoritados ', async () => {
    const { user } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i }) as HTMLLinkElement;
    await user.click(linkMoreDetails);

    const isPokemonFavorited = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }) as HTMLInputElement;
    await user.click(isPokemonFavorited);
    expect(isPokemonFavorited.checked).toBe(true);

    const starFavoritedPokemon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starFavoritedPokemon).toBeInTheDocument();
  });
});
