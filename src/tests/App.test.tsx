import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.tsx />', () => {
  it('1. O primeiro link deve ter o texto Home.', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
  });

  it('2. O segundo link deve ter o texto About.', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
  });

  it('3. O terceiro link deve ter o texto Favorite Pokémon.', () => {
    renderWithRouter(<App />);
    const linkFavPokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(linkFavPokemon).toBeInTheDocument();
  });

  it('4. A aplicação deve ser redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação.', () => {
    const { user } = renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading', { name: /pokédex/i });
    expect(titlePokedex).toBeInTheDocument();

    const linkHome = screen.getByRole('link', { name: /home/i });
    user.click(linkHome);
    const titleHome = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(titleHome).toBeInTheDocument();
  });

  it('5. A aplicação deve ser redirecionada para a página About, na URL /about, ao clicar no link About da barra de navegação.', async () => {
    const { user } = renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading', { name: /pokédex/i });
    expect(titlePokedex).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    await user.click(linkAbout);
    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  it('6. A aplicação deve ser redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação.', async () => {
    const { user } = renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading', { name: /pokédex/i });
    expect(titlePokedex).toBeInTheDocument();

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    await user.click(linkFavorite);
    const titleFavorite = screen.getByRole('heading', { name: /favorite pokémon/i });
    expect(titleFavorite).toBeInTheDocument();
  });

  it('7. A aplicação deve ser redirecionada para a página Not Found ao entrar em URL desconhecida.', () => {
    renderWithRouter(<App />, { route: '/nao-existe-essa-rota' });
    const titlePageNotFound = screen.getByRole('heading', { name: /page requested not found/i });
    expect(titlePageNotFound).toBeInTheDocument();
  });
});
