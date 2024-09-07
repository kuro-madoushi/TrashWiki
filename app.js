// Adiciona um listener para o evento 'DOMContentLoaded' para garantir que o código só execute depois que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    populateGenreFilter(); // Popula o filtro de gêneros ao carregar a página
    // Não exibe filmes ao carregar a página
    document.getElementById('filmList').innerHTML = '';
});

// Adiciona listeners para os filtros de década, gênero e busca, que chamam a função de filtragem sempre que os valores mudam
document.getElementById('decade').addEventListener('change', filterFilms);
document.getElementById('genre').addEventListener('change', filterFilms);
document.getElementById('search').addEventListener('input', filterFilms);

// Preenche o filtro de gênero com os gêneros únicos encontrados na lista de filmes
function populateGenreFilter() {
    const genreSelect = document.getElementById('genre'); // Obtém o elemento select do gênero
    const genres = new Set(); // Usar um Set para evitar gêneros repetidos

    // Itera pelos filmes e adiciona gêneros ao Set
    filmesTrash.forEach(film => {
        if (film.subgenero) {
            // Se a propriedade subgenero existir, divide os gêneros e adiciona ao Set
            film.subgenero.split(',').forEach(g => genres.add(g.trim().toLowerCase()));
        }
    });

    // Adiciona as opções de gêneros ao select
    genres.forEach(genre => {
        const option = document.createElement('option'); // Cria um novo elemento option
        option.value = genre; // Define o valor do option
        option.textContent = genre.charAt(0).toUpperCase() + genre.slice(1); // Define o texto visível com a primeira letra maiúscula
        genreSelect.appendChild(option); // Adiciona o option ao select
    });
}

// Filtra os filmes com base nos critérios de busca, gênero e década
function filterFilms() {
    const searchQuery = document.getElementById('search').value.toLowerCase(); // Obtém e normaliza a consulta de busca
    const genre = document.getElementById('genre').value; // Obtém o gênero selecionado
    const decade = document.getElementById('decade').value; // Obtém a década selecionada

    // Filtra filmes com base nos critérios
    const filteredFilms = filmesTrash.filter(film => {
        const matchesSearch = film.titulo.toLowerCase().includes(searchQuery); // Verifica se o título do filme corresponde à consulta de busca
        const matchesGenre = genre ? film.subgenero.toLowerCase().includes(genre.toLowerCase()) : true; // Verifica se o gênero do filme corresponde ao filtro
        const matchesDecade = decade ? Math.floor(film.ano / 10) * 10 == decade : true; // Verifica se o ano do filme corresponde à década selecionada

        return matchesSearch && matchesGenre && matchesDecade; // Retorna verdadeiro se todos os critérios forem atendidos
    });

    // Exibe os filmes filtrados
    displayFilms(filteredFilms);
}

// Exibe a lista de filmes no DOM
function displayFilms(films) {
    const filmList = document.getElementById('filmList'); // Obtém o elemento onde a lista de filmes será exibida
    filmList.innerHTML = ''; // Limpa a lista atual de filmes

    if (films.length === 0) {
        filmList.innerHTML = '<p>Nenhum filme encontrado.</p>'; // Exibe uma mensagem se nenhum filme for encontrado
        return;
    }

    // Cria e adiciona elementos para cada filme
    films.forEach(film => {
        const filmElement = document.createElement('div'); // Cria um novo elemento div para o filme
        filmElement.className = 'film'; // Define a classe do elemento
        filmElement.innerHTML = `
            <img src="${film.imagem}" alt="${film.titulo}"> <!-- Imagem do filme -->
            <h3>${film.titulo}</h3> <!-- Título do filme -->
            <p><strong>Ano:</strong> ${film.ano}</p> <!-- Ano do filme -->
            <p><strong>Sub-gênero:</strong> ${film.subgenero || 'Desconhecido'}</p> <!-- Sub-gênero do filme -->
            <p>${film.descricao}</p> <!-- Descrição do filme -->
            <a href="${film.link}" target="_blank">Saiba mais</a> <!-- Link para mais informações sobre o filme -->
        `;
        filmList.appendChild(filmElement); // Adiciona o elemento do filme à lista de filmes
    });
}
