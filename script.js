//criando as variaveis
let qtdCartas=0;
let arrayCartas=["gif0","gif1","gif2","gif3","gif4","gif5","gif6"];
let primeiraCarta=null;
let segundaCarta=null;
let trava=false;
let contador=0;
let tempo=0;//cronometrar o tempo//
let relogio;
let timer;

function iniciarJogo(){
    // verificação para caso o numero seja incorreto
    while(qtdCartas<4 || qtdCartas>14 || qtdCartas % 2!=0){
        qtdCartas=parseInt(prompt("Digite a quantidade de cartas que deseja entre 4 e 14: "))
    }
    //embaralhador do array
    let sorteador = arrayCartas.slice(0, qtdCartas);
    sorteador.sort(()=>Math.random() - 0.5);

    //criando um for para criar as cartas solicitadas no arquivo html
    let criarCarta='';
    for(let i=0;i<sorteador.length;i++){
        criarCarta+=`<div data-identifier="card" class="carta" onclick="mostrarCarta(this)"><div data-identifier=front-face" class="cartaFrente"><img src='gif/${sorteador[i]}.gif'></div><div data-identifier="back-face" class="cartaTras"><img src="./img/front.png"></div></div>`
    }
    //adiciona as cartas embaralhadas no html
    const adicionaCarta=document.querySelector("main");
    adicionaCarta.innerHTML=criarCarta;

    timer=setInterval(()=>{
        tempo++
        relogio.document.querySelector("header p");
        relogio.innerHTML=tempo;
    },1000);
}

function mostrarCarta(carta){
    //verifica se a carta ja esta virada
    if (!trava && !carta.classList.contains("flip")){
        carta.classList.add("flip")
        //coleta da primeira carta
        if(!primeiraCarta){
            primeiraCarta=carta.querySelector(".cartaFrente img");//seleciona a primeira carta
        }
        else if(!segundaCarta){
            segundaCarta=carta.querySelector(".cartaFrente img")//seleciona a segunnda carta
        }//VERIFICAÇÃO DAS DUAS IMAGENS SELECIONADAS
        if(primeiraCarta.src==segundaCarta.src){
            //adiciona a classe das cartas iguais
            primeiraCarta.parentNode.parentNode.classList.add("cartasIguais");
            segundaCarta.parentNode.parentNode.classList.add("cartasIguais");
            //reseta as variaveis de comparação
            primeiraCarta=null;
            segundaCarta=null;
            contador=contador+2;
        }










    }
}

//função para verificar se o jogo ja terminou
function verificaFim(){
    let fim=true;
    //seleciona todas as cartas do <main>
    let cartas=document.querySelectorAll(".carta");
    for(let carta of cartas){
        //verificação se todas as cartas do <main> possuem .flip
        if(!carta.classList.contains("flip")){
            fim=false;
        }
    }
    return fim;
}

iniciarJogo();
