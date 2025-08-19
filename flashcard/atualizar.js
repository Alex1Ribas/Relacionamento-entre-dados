const { baralho } = require("../data");
const listarAll = require("./listarAll")

function atualizar(){
    listarAll()

    let escolha = prompt('Escolha o uma flash: ') - 1;
    
        if (isNaN(escolha) || escolha < 0 || escolha >= baralho.flashCard.length) {
            console.log('Escolha um índice válido');
            return;  
        }
    
        let novaPergunta = prompt('Seu flashcard: ');
        let novaResposta = prompt('Resposta: ');

    baralho.flashCard(escolha).pergunta = novaPergunta
    baralho.flashCard(escolha).resposta = novaResposta

    console.log("\n Atualização realizada com sucesso! \n");
    
}


module.exports = atualizar