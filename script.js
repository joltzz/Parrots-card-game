//criando as variaveis
let qtdCartas=0;
let arrayCartas=["gif0","gif1","gif2","gif3","gif4","gif5","gif6"];
let primeiraCarta=null;
let segundaCarta=null;
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
        criarCarta+=`<div data-identifier="card" class="carta" onclick="mostrarCarta(this)"><div data-identifier=ront-face" class="cartaFrente"><img src='./gif/${sorteador[i]}.gif'></div><div data-identifier="back-face" class="cartaTras"><img src="./img/front.png"></div></div>`
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

//aplica imagem no verso da carta
let cartas =adicionaCarta.children;
for(let carta of cartas){
    carta.innerHTML = '<div class="verso-face" data-identifier="back-face"><img src="img/front.png"></div>'+
    '<div class="frente-face" data-identifier="front-face"> *********** </div>';
}

//funcao quando o usuario clicar na carta
function clickCarta(){
    
    //when clicked, its supposed to replace the front image(parrot)
    //take img/front out ---> replace with Math.random gif
}
