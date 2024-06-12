React Testing Library - RTL 🕵️‍♀️🪲
===============	

## O que é?
Enquanto uns caçavam pokémons, eu estava caçando *bugs* na **Pokédex**, aplicação desenvolvida pela Trybe, que usou a biblioteca [React](https://react.dev/) e consome dados da API [PokéAPI](https://pokeapi.co/)! Sendo assim, o objetivo deste projeto, é o desenvolvimento da cobertura de testes para a aplicação utilizando a [**RTL**](https://testing-library.com/docs/react-testing-library/intro) - biblioteca voltada para testes automatizados front-end em aplicações desenvolvidas com React. ;)

## Rodando a aplicação localmente:
Você pode usar o [Visual Studio Code (vulgo VS Code)](https://code.visualstudio.com/download). Abra o terminal e siga os próximos passos:


1. Clone o projeto.  Você pode fazer isso via **`HTTP`** ou via **`SSH`**.

### Via HTTP:
```bash
  git clone https://github.com/raisamrs/project-react-testing-library-ts.git
```
### Via SSH:
```bash
  git clone git@github.com:raisamrs/project-react-testing-library-ts.git
```
Observe a imagem abaixo:
![Observe o gif](https://github.com/raisamrs/project-react-testing-library-ts/blob/main/src/assets/usando-o-vs-code.png)

2. Entre no diretório do projeto, digitando o comando abaixo no terminal:

```bash
  cd project-react-testing-library-ts
```

3. Instale as dependências do projeto:
```bash
  npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
Você verá, então, a aplicação **Pokédex** rodando localmente na porta 5173: http://localhost:5173/.

Ela é bem intuitiva e simples, então sinta-se à vontade pra explorá-la e entender como funciona! 😃

## Onde estão os testes?

 Vá na pasta `src/tests`. Dentro dela, você encontrará os arquivos:

  * `About.test.tsx` - responsável pelos testes da página *About*,

  * `App.test.tsx` - responsável pelos testes da página *Home*;

  * `FavoritePokemon.test.tsx` - responsável pelos testes da página *Favorite Pokémon*;

  * `NotFound.test.tsx` - responsável pelos testes de uma rota inexistente. Você pode vê-lo ao, por exemplo, tentar acessar http://localhost:5173/nao-existe;

  * `Pokedex.test.tsx` - responsável pelos testes do card que contém as informações do pokémon, do botão `Próximo Pokémon` e do painel lateral com os botões de filtro para os tipos dos pokémons (*fire*, *poison* etc.);

  * `Pokemon.test.tsx` - responsável pelos testes das informações do Pokémon (nome, tipo, peso, imagem, link "*more details*");

  * `PokemonDetails.test.tsx` - responsável pelos testes da página *Pokémon Details*.


> ⚠️ O nome de cada um dos arquivos de teste é correspondente ao nome do componente/página que está sendo testado. Você pode encontrá-los em `src/pages` ou `src/components`.
## Rodando os testes:

### Rodando um arquivo de teste por vez (recomendado):
* Digite no terminal:

```bash
  npm run test NomeDoArquivo.test.tsx
```
Exemplo:
 
```bash
  npm run test About.test.tsx
```
Observe o gif abaixo:
![Observe o gif](https://github.com/raisamrs/project-react-testing-library-ts/blob/main/src/assets/npm-run-test-nome-do-arquivo.gif)
### Rodando todos os testes de todos os arquivos de teste:
* Digite no terminal:

```bash
  npm run test
```
Observe o gif abaixo:
![Observe o gif](https://github.com/raisamrs/project-react-testing-library-ts/blob/main/src/assets/npm-run-test.gif)
## Verificando se todas as linhas de código foram cobertas:

* Digite no terminal:

```bash
  npm run coverage
```
Observe o gif abaixo:
![Observe o gif](https://github.com/raisamrs/project-react-testing-library-ts/blob/main/src/assets/npm-run-coverage.gif)
## Autores:

- Aplicação: [@trybe](https://github.com/tryber)

- Testes: [@raisamrs](https://www.github.com/raisamrs)

