// Variaveis do jogo //

let num_cartas;
let indexConteudo;
let verificador;

let compare;
let impedeSelecao;

// Variaveis informacao //

let contadorJogadas;
let T0;
let T;
let jogoAcabou;

function comecarNovoJogo() {
    // Pede ao usuario o numero de cartas

    num_cartas = 0;

    while (num_cartas < 4 || num_cartas > 14 || num_cartas % 2 != 0) {
        num_cartas = prompt("Digite um número de cartas par entre 4 e 14");
        num_cartas = parseFloat(num_cartas);
    }

    // Inicializa variaveis do jogo

    indexConteudo = [];
    verificador = [];

    compare = [null, null];
    impedeSelecao = false;
    contadorJogadas = 0;

    // escolhe os logos aleatoriamente 
    let logos = [0,1,2,3,4,5,6];
    
    logos.sort(function () {
        return 0.5 - Math.random();
    });

    let cont = 0;
    for (let i = 0; i < num_cartas; i += 2) {
        indexConteudo.push(logos[cont]);
        indexConteudo.push(logos[cont]);
        verificador.push(true);
        verificador.push(true);
        cont++;
    }

    indexConteudo.sort(function () {
        return 0.5 - Math.random();
    });

    // Inicializa variaveis das informacoes

    contadorJogadas = 0;
    T = 0;
    jogoAcabou = false;

    // Cria as cartas HTML

    let aux = "";
    for (let i = 0; i < num_cartas; i++) {
        let logo = indexConteudo[i];

        aux += `
        <div id="carta${i}" class="carta" onclick="handle_click(this)" data-identifier="card" >
            <div class="verso face" data-identifier="back-face">
                <img src="imgs/front.png" alt="">
            </div>
            <div class="frente face virada" data-identifier="front-face">
                <img src="imgs/logo${logo}.svg" alt="">
            </div>
        </div>
        `;
    }

    var elemento = document.querySelector(".cartas");
    elemento.innerHTML = aux;

    // atualiza as informacoes
    var elemento = document.querySelector(".info-jogo");
    elemento.classList.remove("oculto");

    atualizarPuntuacao();
    atualizarRelogio();

    // Centraliza as cartas na janela
    centralizarCartas();
}

function centralizarCartas() {
    let tamCarta = 34 + 117 + 2;
    let cartasPorTela = Math.trunc(window.innerWidth / tamCarta);
    let larguraFila = cartasPorTela * tamCarta;
    let margem = Math.trunc((window.innerWidth - larguraFila) / 2);

    var elemento = document.querySelector(".cartas");
    elemento.style.margin = "auto " + margem + "px";

    var elemento = document.querySelector(".info-jogo");
    elemento.style.width =
        Math.min(num_cartas, cartasPorTela) * tamCarta - 34 + "px";
}
