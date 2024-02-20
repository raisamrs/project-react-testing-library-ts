import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.tsx />', () => {
  it('1. A página deve conter um heading h2 com o texto "Page requested not found".', () => {
    renderWithRouter(<App />, { route: '/nao-existe-essa-rota' });
    const titlePageNotFound = screen.getByRole('heading', { name: /page requested not found/i });
    expect(titlePageNotFound).toBeInTheDocument();
    expect(titlePageNotFound.tagName).toBe('H2');
  });

  it('2. A página deve mostrar a imagem com o texto alternativo "Clefairy pushing buttons randomly with text I have no idea what im doing."', () => {
    renderWithRouter(<App />, { route: '/nao-existe-essa-rota' });
    const imgPageNotFound = screen.getByRole('img') as HTMLImageElement;
    expect(imgPageNotFound.src).toBe('http://localhost:3000/404.gif');
  });

  it.skip('', () => {

  });

  it.skip('', () => {

  });

  it.skip('', () => {

  });

  it.skip('', () => {

  });
});
