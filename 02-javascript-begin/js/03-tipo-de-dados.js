//7 tipos de Dados

/* Todos são primitivos exceto os objetos */

var nome  = 'Alex'; //String
var idade = 41; Number
var possueFaculdade = true; //boolean
var time; //undefined
var comida = null; //Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // object

// var nome = 'Alex';
// var simbolo = Symbol();
// console.log(typeof simbolo)

// Você pode soma uma string e assim concatenar as palavras.
// var nome = 'Alex';
// var sobrenome = 'Moreira';
// var nomeCompleto = nome + ' ' + sobrenome;
// console.log(nomeCompleto);

// Você pode somar números com strings, o resultado final é sempre uma string.
// var gols = 1000;
// var frase = 'Romario fez ' + gols + ' gols';
// console.log(frase)
// console.log(typeof frase)

// Cancatenando Variaveis modo 01
// var melhor = 'teste';
// var frase1 = 'Esse é o ' + melhor + ' jogo'
// console.log(frase1);

// Cancatenando Variaveis com template strings

var gols = 1000;
var frase2 = `Romario fez ${gols} gols`; //Utilizando Template String
console.log(frase2)


