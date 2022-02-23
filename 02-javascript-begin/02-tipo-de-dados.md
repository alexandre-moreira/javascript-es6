# 7 tipos de Dados
- Todos são primitivos exceto os objetos

var nome  = 'Alex'; //String
var idade = 41; Number
var possueFaculdade = true; //boolean
var time; //undefined
var comida = null; //Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // object

| Primitivos são dados imutáveis

# Tipo String
- Você pode soma uma string e assim concatenar as palavras.

Ex:
    var nome = 'Alex';
    sobrenome = 'Moreira';
    nomeCompleto = nome + ' ' + sobrenome

- Você pode somar números com strings, o resultado final é sempre uma string.

Ex:
    var gols = 1000;
    var frase = 'Romario fez' + gols + 'gols';
## Aspas Duplas, Simples e Template String

"JavaScript é super fácil";
'JavaScript é super fácil';
"JavaScript é 'super' fácil";
'JavaScript é \"super\" fácil';
"JavaScript é "super" fácil";// Inválido

| Não necessariamente precisamos
| atribuir valores a uma variável.

## Template String, nova feature do ES6;
Ex:
    var gols = 1000;
    var frase1 = 'Romario fez ' + gols + 'gols';
    var frase2 = `Romario fez ${gols} gols`; Utilizando Template String
# Exercicio

// Declare uma variavel contendo uma string
var cidade = 'São Paulo';

// Declare uma variavel contendo um número dentro de uma string
var serviceTag = '123456';

// Declare uma variavel com a sua idade
var idade = 41;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Alex';
var sobrenome = 'Moreira'
console.log(nome + ' ' + sobrenome)

// coloque a seguinte frase em uma variável: It's time
var message = " It's time";

// Verifique o tipo da variavel que tem seu nome.
console.log(typeof nome)