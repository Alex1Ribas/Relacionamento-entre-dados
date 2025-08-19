const prompt = require('../prompt/prompt');
const { baralho } = require("../data");
const listarAll = require("./listarAll");

function remove(){
    listarAll()

    let escolha = prompt('Selecione um baralho: ') - 1;
        if ( isNaN(escolha) || escolha < 0 || escolha >= baralho.flashCard.length)
        {console.log(" Escolha um indice valido!"); return;}

    let confirmacao = prompt('Realmente deseja apagar o FlashCard: ' + baralho.flashCard[escolha] + " (s/n)?")
    if (confirmacao.toLowerCase() === 's'){baralho.flashCard.splice(escolha, 1);
        console.log('\n Removido com sucesso!\n');
    } else {console.log('\nCancelando...\n');return} 
}

module.exports = remove