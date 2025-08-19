const criarBaralho = require('./baralho/criar');
const listarBaralho = require('./baralho/listarBaralho');
const removerBaralho = require('./baralho/remover');
const remove = require('./baralho/remover');
const criarFlashCard = require('./flashcard/criar');
const listarAll = require('./flashcard/listarAll');
const listarFlashCardPorBaralho = require('./flashcard/listarFlashCardPorBaralho');
const prompt = require('./prompt/prompt')

Menu()
function Menu(){
    console.log(`
                ---- MENU ----
1. Criar Baralho                 6. Buscar por baralho
2. Criar Falsh Card              7. Buscar Flash Card
3. Listar Baralho                 8. Remover Baralho
4. Listar Falsh Card              9. Remover Flash Card
5. Listar Flash Car por Baralho    10. Sair

`);

let escolha = prompt('Escolha uma opção: ')

switch (escolha) {
    case '1':
        criarBaralho(); Menu();
        break;
    case '2':
        criarFlashCard(); Menu();
        break;
    case '3':
        listarBaralho(); Menu();
        break;
    case '4':
        listarAll(); Menu();
        break
    case '5':
        listarFlashCardPorBaralho(); Menu();
        break
    case '6':
        buscarPorBaralho(); Menu();
        break
    case '7':
        buscarFlashCard(); Menu();
        break
    case '8':
        removerBaralho();Menu();
        break
    case '9':
        remove(); Menu();
        break
    case '10':
        console.log('\n Saindo...\n');
        process.exit();

    default:
        console.log('Entrada invalida, tente novamente!');
        Menu()
        break;
    }
}