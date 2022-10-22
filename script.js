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


const cardBoard = document.querySelector(".deck");

function comparador() {
    return Math.random() - 0.5;

}

let cardHTML = "";

cartasSelecionadas.sort(comparador);
for (let i = 0; i < cartasSelecionadas.length; i++) {
    cardHTML += `
    <div class="card card-${cartasSelecionadas[i]}">
    <div class="face back"> <img src="images/${cartasSelecionadas[i]}"></div>
    <div class="face front"> <img src="images/back2.png"> </div>
    </div>
    `
}

cardBoard.innerHTML = cardHTML;



/**function virarCarta(){

    let cartasClicadas
} */



/**- Clique na carta
    - [ ]  Ao clicar em uma carta, a mesma deve ser virada
    - [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [ ]  Caso seja a segunda carta virada, existem 2 situações:
        - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
        - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
    - [ ]  **Dica**: se quiser fazer o efeito 3D da carta virando, você pode ver o CSS necesśario em: [https://repl.it/@BootcampRespond/FlippedCards#index.html](https://repl.it/@BootcampRespond/FlippedCards#index.html) . Só se atente que nesse exemplo a carta vira ao passar o mouse. No caso do jogo, seria ao clicar.
- Fim do Jogo
    - [ ]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X **a quantidade de vezes que o usuário virou uma carta no jogo**.
        
        Ou seja: **cada clique é uma jogada**. Não é virar duas cartas que é uma jogada.
        

# Bônus (opcional) */