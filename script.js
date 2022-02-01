let qtdCartas=0;

// verificação para caso o numero seja incorreto
while(qtdCartas<4 || qtdCartas>14 || qtdCartas % 2!=0){
    qtdCartas=parseInt(prompt("Digite a quantidade de cartas que deseja entre 4 e 14: "))
}

//criando um for para criar as cartas no HTML
let criarCarta="";
for(let i=0; i<=qtdCartas; i++){
    //`percore ${qtdCartas} vezes criando ${qtdCartas} cartas`
    criarCarta+=(`div id="carta${i}" class="carta" onclick="girarCarta(this)"></div>`);
}

//funcao de girar a carta
function girarCarta(){

}
