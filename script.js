let qtdCartas=0;

// verificação para caso o numero seja incorreto
while(qtdCartas<4 || qtdCartas>14 || qtdCartas % 2!=0){
    qtdCartas=parseInt(prompt("Digite a quantidade de cartas que deseja entre 4 e 14: "))
}

//criando um for para criar as cartas solicitadas
let criarCarta="";
for(let i=0; i<qtdCartas; i++){
    //`percore ${qtdCartas} vezes criando ${qtdCartas} cartas`
    criarCarta+=(`<div id="carta${i}" class="carta" onclick="mostrarCarta(this)"></div>`);
}

//aplica a carta no HTML
let adicionaCarta=document.querySelector(".cartas")
adicionaCarta.innerHTML=criarCarta;

//aplica imagem no verso da carta
let cartas =adicionaCarta.children;
for(let carta of cartas){
    carta.innerHTML = "<img src='img/front.png'>";
}

//resta centralizar/armazenar/sortear/comparar//
