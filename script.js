//- [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)

var quantasCartas = 0;

do {
    var quantasCartas = parseInt(window.prompt("Com quantas cartas você quer jogar?\n (4 a 14 cartas)"));
    } while (isNaN(quantasCartas) || quantasCartas%2 == 1 || quantasCartas > 14 || quantasCartas < 4);




/** O usuário só poderá inserir números pares no prompt, de 4 a 14. 
 * Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o prompt deverá ficar sendo repetido, até que o usuário coloque um número válido.
 */


/**Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória*/