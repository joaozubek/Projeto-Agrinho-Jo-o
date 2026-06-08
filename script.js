const perguntas = [

{
    pergunta: "Qual prática agrícola ajuda a conservar o solo?",
    respostas: [
        {texto:"Queimada", correta:false},
        {texto:"Plantio direto", correta:true},
        {texto:"Desmatamento", correta:false},
        {texto:"Poluição", correta:false}
    ]
},

{
    pergunta: "Qual é a principal função das árvores?",
    respostas: [
        {texto:"Produzir plástico", correta:false},
        {texto:"Absorver CO₂ e produzir oxigênio", correta:true},
        {texto:"Aumentar a poluição", correta:false},
        {texto:"Secar rios", correta:false}
    ]
},

{
    pergunta: "O que é agricultura sustentável?",
    respostas: [
        {texto:"Produzir preservando o meio ambiente", correta:true},
        {texto:"Desmatar para produzir mais", correta:false},
        {texto:"Não usar tecnologia", correta:false},
        {texto:"Produzir sem planejamento", correta:false}
    ]
},

{
    pergunta: "Qual material pode ser reciclado?",
    respostas: [
        {texto:"Vidro", correta:true},
        {texto:"Terra", correta:false},
        {texto:"Pedra", correta:false},
        {texto:"Areia", correta:false}
    ]
},

{
    pergunta: "Por que a água é importante para a agricultura?",
    respostas: [
        {texto:"Ajuda no crescimento das plantas", correta:true},
        {texto:"Substitui o solo", correta:false},
        {texto:"Elimina nutrientes", correta:false},
        {texto:"Impede a fotossíntese", correta:false}
    ]
}

];

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const proximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

let indiceAtual = 0;
let pontuacao = 0;

function mostrarPergunta(){

    respostas.innerHTML = "";

    let atual = perguntas[indiceAtual];

    pergunta.textContent = atual.pergunta;

    atual.respostas.forEach(resposta => {

        const botao = document.createElement("button");

        botao.textContent = resposta.texto;

        botao.classList.add("btn-resposta");

        botao.onclick = () => verificarResposta(resposta.correta);

        respostas.appendChild(botao);

    });

}

function verificarResposta(correta){

    if(correta){
        pontuacao++;
    }

    proximo.style.display = "block";

    Array.from(respostas.children).forEach(botao => {
        botao.disabled = true;
    });

}

proximo.addEventListener("click", () => {

    indiceAtual++;

    if(indiceAtual < perguntas.length){

        mostrarPergunta();

        proximo.style.display = "none";

    } else {

        mostrarResultado();

    }

});

function mostrarResultado(){

    pergunta.textContent = "Quiz Finalizado!";

    respostas.innerHTML = "";

    resultado.innerHTML =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas! 🎉`;

    proximo.style.display = "none";

}

mostrarPergunta();
