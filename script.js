var quantasCartas = 0;
let cartasSelecionadas = [];

let primeiraCartaSelecionada = '';
let segundaCartaSelecionada = '';

let quantidadeCliquesCartas = 0;
let quantidadeAcertos = 0;

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


const cardBoard = document.querySelector(".deck");

function comparador() {
    return Math.random() - 0.5;

}

let cardHTML = "";

cartasSelecionadas.sort(comparador);
for (let i = 0; i < cartasSelecionadas.length; i++) {
    cardHTML += `
    <div class="card" onclick="clicarCarta(this)" id="${cartasSelecionadas[i]}">
    <div class="face back"> <img src="images/${cartasSelecionadas[i]}"></div>
    <div class="face front"> <img src="images/back2.png"> </div>
    </div>
    `
}

cardBoard.innerHTML = cardHTML;



function clicarCarta(selecionada) {
    if (selecionada.className.includes('revelarCarta')) {
        return;
    }

    quantidadeCliquesCartas++;
    if (primeiraCartaSelecionada === '' && segundaCartaSelecionada === '') {
        primeiraCartaSelecionada = selecionada;

        selecionada.classList.add('revelarCarta');
    } else if (primeiraCartaSelecionada != '' && segundaCartaSelecionada === '') {
        segundaCartaSelecionada = selecionada;
        selecionada.classList.add('revelarCarta');
        checarCartas(selecionada);
    }
}

function checarCartas() {
    const idPrimeiraCarta = primeiraCartaSelecionada.getAttribute('id');
    const idSegundaCarta = segundaCartaSelecionada.getAttribute('id');

    if (idPrimeiraCarta === idSegundaCarta) {
        primeiraCartaSelecionada = '';
        segundaCartaSelecionada = '';
        quantidadeAcertos++;

        if (quantidadeAcertos * 2 === quantasCartas) {
            setTimeout(() => {
                    alert('Você ganhou em ' + quantidadeCliquesCartas + ' jogadas!');
                },500);
        }
    } else {
        setTimeout(() => {
                primeiraCartaSelecionada.classList.remove('revelarCarta');
                segundaCartaSelecionada.classList.remove('revelarCarta');

                primeiraCartaSelecionada = '';
                segundaCartaSelecionada = '';
            },1000);
    }
}