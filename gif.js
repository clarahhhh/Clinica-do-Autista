let perguntaAtual = 0;
const perguntas = [
    {pergunta: "Qual atividade você mais gosta?", respostas: ["Desenhar", "Brincar ao ar livre", "Jogar VideoGame "]},
    {pergunta: "Quando você está feliz, oque você costuma fazer?", respostas: ["Sorrir e brincar", "Ficar calado", "Correr"]},
    {pergunta: "Como você gosta de aprender coisas novas?", respostas: ["Vendo vídeos", "Ouvindo histórias", "Praticando"]},
    {pergunta: "Qual desses animais você gostaria de ter como amigo?", respostas: ["Gato", "Elefante", "Coelho"]},
    {pergunta: "Qual superpoder você gostaria de ter?", respostas: ["Voar ", "Falar com os animais ", "Ser invisível"]}
];

let respostas = [];

function selecionarResposta(indice) {
    // Desmarca as outras alternativas e marca a selecionada
    const botoes = document.querySelectorAll(".alternativa");
    botoes.forEach(botao => botao.classList.remove("selecionada"));

    // Marca a alternativa clicada
    const alternativaSelecionada = botoes[indice - 1];
    alternativaSelecionada.classList.add("selecionada");

    // Habilita o botão "Próxima"
    document.getElementById("proxima").disabled = false;

    // Guarda a resposta escolhida
    respostas[perguntaAtual] = indice;
}

function proximaPergunta() {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        atualizarPergunta();
    } else {
        mostrarMensagemFinal();
    }
}

function atualizarPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    perguntaElement.innerHTML = perguntas[perguntaAtual].pergunta;

    const botoes = document.querySelectorAll(".alternativa");
    botoes.forEach((botao, index) => {
        botao.innerHTML = perguntas[perguntaAtual].respostas[index];
        botao.classList.remove("selecionada"); // Remove seleção da resposta anterior
    });

    // Desabilita o botão "Próxima"
    document.getElementById("proxima").disabled = true;
}

function mostrarMensagemFinal() {
    document.querySelector(".quiz-container").style.display = "none";
    document.getElementById("mensagem-final").style.display = "block";
}