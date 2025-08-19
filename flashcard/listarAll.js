const { baralho } = require("../data");

function listarAll() {
    let totalFlashcards = 0;

    for (let i = 0; i < baralho.length; i++) {
        if (baralho[i].flashCard.length > 0) {
            console.log(`\nBaralho: ${baralho[i].nome}`);


    for (let k = 0; k < baralho[i].flashCard.length; k++) {
        console.log(`${k + 1}. ${baralho[i].flashCard[k].pergunta} - ${baralho[i].flashCard[k].resposta}`);
         totalFlashcards++;
            }
        }
    }

    if (totalFlashcards === 0) {
        console.log("Você não possui flashcards.");
    }
}

module.exports = listarAll;
