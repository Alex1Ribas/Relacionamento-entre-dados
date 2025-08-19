const listarBaralho = require("../baralho/listarBaralho");
const { baralho } = require("../data");
const prompt = require('../prompt/prompt');

function listarFlashCardPorBaralho() {
    listarBaralho();

    let escolha = prompt('Selecione um baralho: ') - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= baralho.length) {
        console.log("Selecione um índice válido!");
        return;
    }

    if (baralho[escolha].flashCard.length === 0) {
        console.log("Este baralho não possui flashcards.");
        return;
    }

    for (let i = 0; i < baralho[escolha].flashCard.length; i++) {
        console.log(`${baralho[escolha].nome} - ${baralho[escolha].flashCard[i].pergunta} - ${baralho[escolha].flashCard[i].resposta}`);
    }
}

module.exports = listarFlashCardPorBaralho;
