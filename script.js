//- [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
/** O usuário só poderá inserir números pares no prompt, de 4 a 14. 
 * Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o prompt deverá ficar sendo repetido, até que o usuário coloque um número válido.
 */

var quantasCartas = 0;
let cartasSelecionadas = [];

const imgsDeck = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
];

do {
    quantasCartas = parseInt(window.prompt("Com quantas cartas você quer jogar?\n (4 a 14 cartas)"));
} while (isNaN(quantasCartas) || quantasCartas % 2 == 1 || quantasCartas > 14 || quantasCartas < 4);

for (let i = 0; i < (quantasCartas / 2); i++) {
    cartasSelecionadas.push(imgsDeck[i]);
    cartasSelecionadas.push(imgsDeck[i]);
}


const cardBoard = document.querySelector(".card");

function comparador() {
    return Math.random() - 0.5;

}

let cardHTML = "";

cartasSelecionadas.sort(comparador);
for (let i = 0; i < cartasSelecionadas.length; i++) {
    cardHTML += `
    <div class="card card-${cartasSelecionadas[i]}">
    <div class="face front"> <img src="images/${cartasSelecionadas[i]}"></div>
    <div class="face back"> <img src="images/back2.png"> </div>
    </div>
    `
}

cardBoard.innerHTML = cardHTML;


/**Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória*/