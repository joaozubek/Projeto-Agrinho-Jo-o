console.log("Quiz Agrinho carregado!");

const perguntas = [
{
    pergunta: "Qual prática agrícola ajuda a conservar o solo?",
    respostas: [
        { texto: "Queimada", correta: false },
        { texto: "Plantio direto", correta: true },
        { texto: "Desmatamento", correta: false },
        { texto: "Poluição", correta: false }
    ]
},
{
    pergunta: "Qual é a principal função das árvores?",
    respostas: [
        { texto: "Produzir plástico", correta: false },
        { texto: "Absorver CO₂ e produzir oxigênio", correta: true },
        { texto: "Aumentar a poluição", correta: false },
        { texto: "Secar rios", correta: false }
    ]
},
{
    pergunta: "O que é agricultura sustentável?",
    respostas: [
        { texto: "Produzir preservando o meio ambiente", correta: true },
        { texto: "Desmatar para produzir mais", correta: false },
        { texto: "Não usar tecnologia", correta: false },
        { texto: "Produzir sem planejamento", correta: false }
    ]
},
{
    pergunta: "Qual material pode ser reciclado?",
    respostas: [
        { texto: "Vidro", correta: true },
        { texto: "Terra", correta: false },
        { texto: "Pedra", correta: false },
        { texto: "Areia", correta: false }
    ]
},
{
    pergunta: "Por que a água é importante para a agricultura?",
    respostas: [
        { texto: "Ajuda no crescimento das plantas", correta: true },
        { texto: "Substitui o solo", correta: false },
        { texto: "Elimina nutrientes", correta: false },
        { texto: "Impede a fotossíntese", correta: false }
    ]
}
];

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const proximoBotao = document.getElementById("proximo");
const resultadoElemento = document.getElementById("resultado");

let indiceAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {

    respostasElemento.innerHTML = "";

    const perguntaAtual = perguntas[indiceAtual];

    perguntaElemento.textContent = perguntaAtual.pergunta;

    perguntaAtual.respostas.forEach((resposta) => {

        const botao = document.createElement("button");

        botao.textContent = resposta.texto;
        botao.classList.add("btn-resposta");

        botao.addEventListener("click", () => {
            selecionarResposta(botao, resposta.correta);
        });

        respostasElemento.appendChild(botao);
    });
}

function selecionarResposta(botaoSelecionado, correta) {

    const botoes = respostasElemento.querySelectorAll("button");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (correta) {
        pontuacao++;
        botaoSelecionado.style.backgroundColor = "#2e7d32";
    } else {
        botaoSelecionado.style.backgroundColor = "#d32f2f";
    }

    proximoBotao.style.display = "block";
}

proximoBotao.addEventListener("click", () => {

    indiceAtual++;

    if (indiceAtual < perguntas.length) {

        proximoBotao.style.display = "none";

        mostrarPergunta();

    } else {

        finalizarQuiz();
    }
});

function finalizarQuiz() {

    perguntaElemento.textContent = "🎉 Quiz Finalizado!";

    respostasElemento.innerHTML = "";

    resultadoElemento.innerHTML =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    proximoBotao.textContent = "Jogar Novamente";
    proximoBotao.style.display = "block";

    proximoBotao.onclick = reiniciarQuiz;
}

function reiniciarQuiz() {

    indiceAtual = 0;
    pontuacao = 0;

    resultadoElemento.innerHTML = "";

    proximoBotao.textContent = "Próxima Pergunta";
    proximoBotao.style.display = "none";

    proximoBotao.onclick = null;

    mostrarPergunta();
}

mostrarPergunta();
