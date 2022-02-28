# Números

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

| Precisão em até 15 números, após isso, ele arredonda.

# Operadores Aritméticos
 var soma = 100 + 50; //150
 var subtracao = 100 - 50; //50
 var multiplicacao = 100 * 2; //200
 var divisao = 100 / 2; //50
 expoente = 2 ** 4; // 16
 modulo = 14 % 5; // 4

 | Lembrando que soma + em string
 | serve para concatenar.

 # Operadores Aritméticos(Strings)
  var soma = '100' + 50; // 10050
  var subtracao = '100' - 50; //50
  multiplicacao = '100' * '2'; //200
  var divisao = 'Comprei 10' / 2; //NaN (Not a Number)

  | É possivel verificar se uma
  | variavel é NaN ou não com a função isNaN();

# A ordem importa
Comela por multiplicação e divisão, depois por soma e subtracao.

    var total1 = 20 + 5 * 2; // 30
    var total1 = (20 + 5) * 2; // 50
    var total1 = 20 / 5 * 2; // 50
    var total1 = 10 + 10 * 2 + 20 / 2; // 40
| Parênteses para priorizar uma
| expressão.

# Operadores Aritméticos Unários

    var incremento = 5;
    console.log(incremento++); // 5
    console.log(incremento); // 6

    var incremento2 = 5;
    console.log(++incremento2); // 6
    console.log(incremento2); // 6

| Mesma coisa para o decremento.
| --x


var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

# Transforma uma string em número
var idade = '28';
var somaIdade = 5;
console.log(+idade +somaIdade)
