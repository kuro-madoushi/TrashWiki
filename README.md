# TrashWiki

## Descrição

O **TrashWiki** é um catálogo de filmes trash desenvolvido como uma aplicação web. Ele permite filtrar filmes por busca, gênero e década, proporcionando uma experiência interativa para explorar filmes desse estilo único.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização da interface gráfica.
- **JavaScript (ES6)**: Lógica de filtragem e interatividade.

---

## Estrutura do Projeto

- **`index.html`**: Arquivo principal que contém a estrutura HTML da página.
- **`style.css`**: Arquivo responsável pela definição dos estilos visuais da aplicação.
- **`app.js`**: Arquivo JavaScript que gerencia a lógica de filtragem, exibição e interatividade.
- **`bancoFilmes.js`**: Arquivo JavaScript que contém a lista de filmes em formato JavaScript.

---

## Funcionamento da Aplicação

1. **Carregamento da Página**:
   - A aplicação busca os dados dos filmes no arquivo `bancoFilmes.js` (hipotético).
   - A função `populateGenreFilter` itera pela lista de filmes e extrai gêneros únicos, populando o filtro de gênero com essas opções.

2. **Interação com Filtros**:
   - O usuário pode interagir com os filtros de busca (campo de texto), gênero (select) e década (select).
   - Sempre que o usuário altera algum filtro, a função `filterFilms` é executada.

3. **Filtragem e Exibição**:
   - A função `filterFilms` recebe os valores dos filtros e os utiliza para filtrar a lista de filmes original.
   - Os filmes que atendem aos critérios de filtro são exibidos na seção `#filmList`.
   - Caso nenhum filme seja encontrado de acordo com os filtros selecionados, uma mensagem informativa é exibida.

---

## Instruções de Uso

1. Clone o repositório para o seu ambiente de desenvolvimento local:
   ```bash
   git clone https://github.com/usuario/trashwiki.git
