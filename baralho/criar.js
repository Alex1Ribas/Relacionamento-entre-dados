const prompt = require('../prompt/prompt')
const {baralho} = require('../data')

function criarBaralho(){

    let id = Date.now()
    let nome = prompt('Título do Baralho: ')
    baralho.push({
        id : id,
        nome: nome,
        flashCard : []
    })
}



module.exports = criarBaralho