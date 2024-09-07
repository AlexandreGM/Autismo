function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let pesquisa = document.getElementById("pesquisa").value


    if (!pesquisa) {
        section.innerHTML = `<p class="mensagem">Você precisa digitar a lei desejada!</p>`;
        return
    }

    pesquisa = pesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let lei = "";
    let descricao = "";
    let resumo = "";
    let tags = "";

    // Itera sobre cada elemento do array de dados
    for (let dado of dados) {
        lei = dado.lei.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        resumo = dado.resumo.toLowerCase()
        tags = dado.tags.toLowerCase()


        if (lei.includes(pesquisa) || descricao.includes(pesquisa) ||
            resumo.includes(pesquisa) || tags.includes(pesquisa)) {

            // Constrói o HTML para cada item da pesquisa
            resultados += `
                <div class="item">
                    <h2>${dado.lei}</h2>
                    <p class="descricao">${dado.descricao}</p>
                    <p>${dado.resumo}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = `<p class="mensagem">Nada foi encontrado!</p>`;

    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
function mostrarTodasAsLeis() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += `
            <div class="item">
                <h2>${dado.lei}</h2>
                <p class="descricao">${dado.descricao}</p>
                <p>${dado.resumo}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    if (!resultados) {
        resultados = `<p class="mensagem">Nenhuma lei disponível!</p>`;
    }

    section.innerHTML = resultados;
}