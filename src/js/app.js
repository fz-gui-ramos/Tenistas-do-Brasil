inputPesquisa = document.querySelector('#campo-pesquisa');
btnPesquisa = document.querySelector('.btn-pesquisa');

inputPesquisa.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    pesquisar();
  }
});

btnPesquisa.addEventListener('click', () => {
    pesquisar();
});

function pesquisar() {
    // **Selecionando o elemento:**
    // Busca no DOM o elemento com o ID "resultados-pesquisa".
    // Esse elemento será usado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = '<p class="mensagem-erro">Por favor, insira algum nome para pesquisar.</p>';
        return; // Interrompe a função
      }

    // **Permitindo pesquisar sem estar digitado igualzinho**
    campoPesquisa = campoPesquisa.toLowerCase()
    // **Inicializando a string de resultados:**
    // Cria uma string vazia para armazenar os resultados da pesquisa.
    // A cada iteração do loop, novos resultados serão adicionados a essa string.
    let resultados = "";
    let nome = "";
    let rank = "";
    let rankDuplas = "";
    let titulos = "";
  
    // **Iterando sobre os dados:**
    // Percorre cada item (dado) dentro do array 'dados'.
    // Cada item provavelmente contém informações como título, descrição e link.
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        dataNascimento = dado.dataNascimento;
        rank = dado.maiorRanking;
        rankDuplas = dado.maiorRankingDuplas;
        titulos = dado.titulosGrandSlam.toLowerCase();

        if (nome.includes(campoPesquisa) ||
            rank.startsWith(campoPesquisa) ||
            rankDuplas.startsWith(campoPesquisa) ||
            titulos.startsWith(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="data-nasc">Data de Nascimento: ${dado.dataNascimento}</p>
                    <p class="ranking">Maior colocação no ranking Singles: ${dado.maiorRanking}</p>
                    <p class="ranking">Maior colocação no ranking Duplas: ${dado.maiorRankingDuplas}</p>
                    <p>Títulos de Grand Slam: ${dado.titulosGrandSlam}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    // Isso substitui o conteúdo anterior do elemento com a nova lista de resultados.
    if (resultados === "") {
      section.innerHTML = '<p class="mensagem-erro">Nenhum atleta foi encontrado. 😥</p>';
    } else {
      section.innerHTML = resultados;
    }
    }
}

const tip = document.querySelector('.tip');
const tipText = document.querySelector('.tiptext');

tip.addEventListener('mouseenter', () => {
  tipText.style.visibility = 'visible';
});

tip.addEventListener('mouseleave', () => {
  tipText.style.visibility = 'hidden';
});