const prompt = require('prompt-sync')();

//Escreva uma função que pega uma string (stringSequence) e uma array de strings (dictionary) e retorna a maior subsequência de stringSequence do dictionary.

//A função recebe a sequencia de letras e retorna um mapa com as posições de cada letra
function criarMapa(sequencia) {
    //Cria um mapa vazio
    let mapa = {};
    //Para cada letra na sequência, verifica se a letra já existe no mapa.
    for (let i = 0; i < sequencia.length; i++){
        if (mapa[sequencia[i]]){
            //Se existir, adiciona mais uma posição da letra ao mapa.
            mapa[sequencia[i]].push(i);
        } else {
            //Se não existir, cria uma nova entrada no mapa com aquela letra.
            mapa[sequencia[i]] = [i];
        }
    }
    //Retorna o novo mapa.
    return mapa;
}

//A função recebe dois parâmetros, uma array com as posições que a letra se encontra e o index inicial para procurar.
function encontraNovoIndex(posicoes, minIndex) {
    //Para cada posição da letra, verifica se a posição é maior ou igual ao índice mínimo.
    for (let index of posicoes) {
        if (index >= minIndex) {
            //Se for, retorna a próxima posição a ser o novo índice mínimo.
            return index + 1;
        }
    }
    //Se não encontrar nenhuma posição válida, retorna false.
    return false;
}

function findNextIndex(mappedIndices, lastMatchedIndex) {
    for (let index of mappedIndices) {
       if (index >= lastMatchedIndex) {
          return index + 1;
       }
    }
    return false;
 };


// A função recebe dois parâmetros, uma palavra e um mapa com as letras e suas posições.
function eSubsequencia(palavra, mapa) {
    //Cria uma variável para guardar o índice inicial para verificar a letra.
    let minIndex = 0;
    
    // Para cada letra da palavra, verifica se aquela letra já existe no mapa.
    for (let letra of palavra) {
        if (mapa[letra]) {
            //Se existir, chama a função encontraNovoIndex passando as posições da letra e o índice mínimo para procurar.
           minIndex = encontraNovoIndex(mapa[letra], minIndex);
           if (minIndex === false) {               
            //Se não encontrar nenhuma posição válida, encerra a função e retorna false.
               return false
           }
        } else {
            //Se não existir, retorna false.
            return false;
        }
    }
    //Se passar por todo o loop sem retornar false, retorna true.
    return true;
}

function maiorPalavra(palavras) {
    let maiorPalavra = '';
    for (let palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}

let sequenciaLetras = ("hullabaloo");
let mapa = criarMapa(sequenciaLetras);
let subsequentes = ['bala', 'hull', 'boo', 'baloo'];
let palavra = maiorPalavra(subsequentes);

let = subPalavras = [];

console.log(mapa);

subsequentes.forEach(function(palavra) {
    if (eSubsequencia(palavra, mapa)) {
        subPalavras.push(palavra);
    }
});


eSubsequencia(palavra, mapa) ? console.log("É uma subsequência") : console.log("Não é uma subsequência");
console.log(`A palavra '${maiorPalavra(subPalavras)}' é a maior subsequência em '${sequenciaLetras}'.`);

