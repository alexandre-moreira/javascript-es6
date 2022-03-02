// Funções
/*
    Bloco de código que pode ser executado e reutilizado. Valores
    podem ser passados por uma função e a mesma retorna outro valor.
*/
    // Exemplo 01

    function areaQuadrado(lado){
        return lado * lado
    }
    console.log('====Exemplo Quadrado====')
    console.log(areaQuadrado(4)); // 16
    console.log(areaQuadrado(5)); // 25
    console.log(areaQuadrado(2)); // 4
    // Chamada de function declaration

// Exemplo 02
    
    function pi(){
        return 3.14;
    }

    var total = 5 * pi(); // 15.7
    console.log('=======Exemplo PI=======')
    console.log(total)
    // Parentese () executam uma função


// Parametros e Argumentos
/* 
    Ao criar uma função, você pode definir parâmetros.
    Ao executar uma função, você pode passar argumentos
*/
// peso e altura são os paramentros
function imc(peso, altura){
   const imc = peso / (altura ** 2);
   return imc;
}

console.log('=======Exemplo IMC======')
console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos
/*
    | Separar por virgula cada
    | parâmetro. Você pode definir
    | mais de um parametro ou nenhum
    | também.
*/

// Parêntese executa a função
function corFavorita(cor){
   if(cor === 'azul'){
       return 'Você gosta do céu';
   }else if(cor === 'verde'){
       return 'Você gosta de mato';
   }else{
       return 'Você não gosta de nada'
   }
}
console.log('=======Exemplo Cor Favorita===')
console.log(corFavorita()); //Retorna, 'Você não gosta de nada'

// Argumentos podem ser funções
/*
    Chamadas de Callback, geralmente são funções que ocorrem após
    algum evento.
*/
console.log('=======Exemplo Click======')
addEventListener('click', function(){
    console.log('Clicou')
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segunda uma função anônima

/*
    | Funções anônimas são aquelas em
    | em que o nome da função não é
    | definido, escritas como
    | funcition(){} ou ()=> {}
*/