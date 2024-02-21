import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.tsx />', () => {
  const cartepie = '/pokemon/10';

  it('1. A página deve conter um texto "<name> Details", em que <name> é o nome do Pokémon.', () => {
    renderWithRouter(<App />, { route: cartepie });

    const titlePokemonDetails = screen.getByRole('heading', { name: /caterpie details/i });
    expect(titlePokemonDetails).toBeInTheDocument();
  });

  it('2. Não deve existir o link de navegação para os detalhes do Pokémon selecionado', () => {
    renderWithRouter(<App />, { route: '/pokemon/10' });

    const linkMoreDetails = screen.queryByRole('link', { name: /more details/i });
    expect(linkMoreDetails).not.toBeInTheDocument();
  });

  it('3. A seção de detalhes deve conter um heading h2 com o texto Summary.', () => {
    renderWithRouter(<App />, { route: cartepie });
    const sumary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(sumary).toBeInTheDocument();
  });

  it('4. A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado', () => {
    renderWithRouter(<App />, { route: cartepie });
    const detailsParagraph = screen.getByText(/for protection, it releases a horrible stench from the antennae on its head to drive away enemies\./i);
    expect(detailsParagraph).toBeInTheDocument();
  });

  it('5. Na seção de detalhes, deverá haver um heading h2 com o texto "Game Locations of <name>" em que <name> é o nome do Pokémon exibido.', () => {
    renderWithRouter(<App />, { route: cartepie });
    const gameLocationsPokemon = screen.getByRole('heading', { name: /game locations of caterpie/i, level: 2 });
    expect(gameLocationsPokemon).toBeInTheDocument();
  });

  it('6. Todas as localizações do Pokémon devem ser mostradas na seção de detalhes', async () => {
    const { container } = renderWithRouter(<App />, { route: cartepie });
    await waitFor(() => {
      const expectedLocations = ['Johto Route 30', 'Johto Route 31', 'Ilex Forest', 'Johto National Park'];
      const cardMaps = container.querySelectorAll('.card-map');
      const pElements = Array.from(cardMaps).map((cardMap) => cardMap.querySelector('p'));

      pElements.forEach((pElement, i) => {
        if (pElement) {
          expect(pElement.textContent).toBe(expectedLocations[i]);
        }
      });
    });
  });

  it('7. Deve ser exibida uma imagem do mapa em cada localização.', () => {
    const { container } = renderWithRouter(<App />, { route: cartepie });

    const imgJohtoRout30 = 'https://archives.bulbagarden.net/media/upload/7/76/Johto_Route_30_Map.png';
    const imgJohtoRout31 = 'https://archives.bulbagarden.net/media/upload/2/2b/Johto_Route_31_Map.png';
    const imgIlexForest = 'https://archives.bulbagarden.net/media/upload/a/ae/Johto_Ilex_Forest_Map.png';
    const imgJohtoNationalPark = 'https://archives.bulbagarden.net/media/upload/4/4e/Johto_National_Park_Map.png';

    const imgLocations = [imgJohtoRout30, imgJohtoRout31, imgIlexForest,
      imgJohtoNationalPark];
    const cardMaps = container.querySelectorAll('.card-map');
    const imgElements = Array.from(cardMaps).map((cardMap) => cardMap.querySelector('img'));

    imgElements.forEach((imgElement, i) => {
      if (imgElement) {
        expect(imgElement.src).toBe(imgLocations[i]);
        expect(imgElement.alt).toMatch(/caterpie location/i);
      }
    });
  });

  it('8. A página deve exibir um checkbox que permite favoritar o Pokémon.', () => {
    renderWithRouter(<App />, { route: cartepie });
    const isPokemonFavorited = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(isPokemonFavorited).toBeInTheDocument();
  });

  it('9. Cliques alternados no checkbox devem adicionar e remover, respectivamente, o Pokémon da lista de favoritos.', async () => {
    const { user } = renderWithRouter(<App />, { route: cartepie });

    const isPokemonFavorited = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }) as HTMLInputElement;
    await user.click(isPokemonFavorited);
    expect(isPokemonFavorited.checked).toBe(true);

    await user.click(isPokemonFavorited);
    expect(isPokemonFavorited.checked).toBe(false);
  });

  it('10. O label do checkbox deve conter o texto Pokémon favoritado?.', () => {
    renderWithRouter(<App />, { route: cartepie });

    const isPokemonFavoritedLabel = screen.getByText(/pokémon favoritado\?/i);
    expect(isPokemonFavoritedLabel).toBeInTheDocument();
  });
});
