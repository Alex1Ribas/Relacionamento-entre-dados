const prompt = require('../prompt/prompt');
const baralho = require('../data');
const listarBaralho = require('../baralho/listarBaralho');

function criarFlashCard() {
    listarBaralho(); 

    let escolha = prompt('Escolha o baralho: ') - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= baralho.length) {
        console.log('Escolha um índice válido');
        return;  
    }

    let pergunta = prompt('Seu flashcard: ');
    let resposta = prompt('Resposta: ');

    for (let i = 0; i < baralho[escolha].flashCard.length; i++) {
        let flashcardExistente = baralho[escolha].flashCard[i];
        if (flashcardExistente.pergunta === pergunta && flashcardExistente.resposta === resposta) {
            console.log('Este flashcard já existe neste baralho!');
            return;
        }
    }

    baralho[escolha].flashCard.push({
        id: Date.now(),
        pergunta: pergunta,
        resposta: resposta
    });

    console.log('Flashcard adicionado com sucesso!');
}

module.exports = criarFlashCard;
