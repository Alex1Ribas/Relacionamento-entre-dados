const { baralho } = require("../data")
const prompt = require('../prompt/prompt')

function listarBaralho(){
    if ( baralho.length === 0){ console.log('Nenhum baralho encontrado!'); return;}
    for(let i = 0; i > baralho.length; i++){
        console.log(`${i + 1}. ${baralho[i].nome} - id : ${baralho[i].id}`);
        let sair = prompt('');return;
    }
}

module.exports = listarBaralho