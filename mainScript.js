// Centraliza as cartas se ha alteracoes na janela do navegador

window.addEventListener("resize", function () {
    centralizarCartas();
});

comecarNovoJogo();

// Gestiona o click nas cartas

function handle_click(elemento) {

    let num = parseFloat(elemento.id.replace("carta", ""));

    if (verificador[num] && !impedeSelecao) {

        // impede temporalmente a selecao da carta
        verificador[num] = false;

        // vira a carta
        virarCarta(elemento);

        // armazena a carta no comparador
        if (compare[0] == null) {
            compare[0] = num;
        } else if (compare[1] == null) {
            compare[1] = num;
        }

        // aumenta o numero de jogadas em 1
        contadorJogadas++;
        if (contadorJogadas == 1) {
            startChronometer();
        }

        // atualiza puntuacao
        atualizarPuntuacao();

        // compara as cartas se o comparador estiver cheio
        if (compare[0] != null && compare[1] != null) {
            impedeSelecao = true;
            setTimeout(compararCartas, 0.97 * 1000);
        }
    }
}
//Função especifica para virar as cartas

function virarCarta(elemento) {
    elemento.querySelector(".verso").classList.toggle("virada");
    elemento.querySelector(".frente").classList.toggle("virada");
}
//Função de comparar as cartas

function compararCartas() {

    if (indexConteudo[compare[0]] == indexConteudo[compare[1]]) {
        // cartas iguais

        for (let i = 0; i < compare.length; i++) {
            elemento = document.querySelector("#carta" + compare[i]);
            elemento.querySelector(".frente").classList.add("encontrada");
        }

        verificarFimJogo();

    } else {
        // cartas diferentes

        for (let i = 0; i < compare.length; i++) {
            verificador[compare[i]] = true;
            let elemento = document.querySelector("#carta" + compare[i]);
            virarCarta(elemento);
        }
    }

    compare[0] = null;
    compare[1] = null;
    impedeSelecao = false;
}

//  Função de verificar o fim do jogo
let mensagemVitoria;

function verificarFimJogo() {

    let cont = 0;
    for (let i = 0; i < verificador.length; i++) {
        if (!verificador[i]) {
            cont++;
        }
    }

    if (cont == verificador.length) {
        // Jogo acabou
        jogoAcabou = true;

        // ultima atualizacao do tempo
        T = Math.trunc((new Date() - T0) / 1000);

        // montar mensagem de vitoria e encerra o jogo
        mensagemVitoria = "Você ganhou em " + contadorJogadas + " jogadas e em " + strTempo() + " minutos";
        setTimeout(encerrarJogo, 300 );
    }
}
//Cronometro

function startChronometer() {
    T0 = new Date();
    setTimeout(partialTime, 1000);
}

function partialTime() {

    if (!jogoAcabou) {

        // tempo transcorrido em segundos (int)
        T = Math.trunc((new Date() - T0) / 1000);

        atualizarRelogio();
        setTimeout(partialTime, 1000);
    }
}

// Atualiza o relogio (startNewGame.js)
function atualizarRelogio() {
    let elemento = document.querySelector(".tempo p");
    elemento.innerHTML = strTempo();
}

// Atualiza a pontuação a cada jogada(startNewGame.js)
function atualizarPuntuacao() {
    let elemento = document.querySelector(".puntuacao p");
    elemento.innerHTML = contadorJogadas;
}

// Função para calcular o tempo em min e seg
function strTempo() {
    let seg = T % 60;
    let min = Math.trunc(T / 60);

    if (seg < 10) {
        seg = "0" + seg;
    }

    if (min < 10) {
        min = "0" + min;
    }

    return min + ":" + seg;
}

// Função de acabar o jogo
function encerrarJogo() {

    alert(mensagemVitoria);

    // perguntar se quer jogar de novo 
    let novoJogo = "";
    while (novoJogo !== "s" && novoJogo !== "S" && novoJogo !== "n" && novoJogo !== "N") {
        novoJogo = prompt("Deseja jogar novamente? (s ou n)");
    }

    // comecar de novo o jogo se a reposta for sim
    if (novoJogo == "s" || novoJogo == "S") {
        comecarNovoJogo();
    }
}