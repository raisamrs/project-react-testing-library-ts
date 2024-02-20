import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <About.tsx />', () => {
  it('1. A página deve conter informações sobre a Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  it('2. A página deve conter um heading h2 com o texto "About Pokédex"', () => {
    renderWithRouter(<App />, { route: '/about' });

    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout.tagName).toBe('H2');
  });

  it('3. A página deve conter dois parágrafos com texto sobre a Pokédex', () => {
    const { container } = renderWithRouter(<App />, { route: '/about' });
    const paragraphsElements = container.querySelectorAll('p');
    expect(paragraphsElements.length).toBe(2);
  });

  it('4. A página deve conter uma imagem da Pokédex com um src específico', () => {
    renderWithRouter(<App />, { route: '/about' });
    const imgPokedex = screen.getByRole('img') as HTMLImageElement;
    expect(imgPokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
