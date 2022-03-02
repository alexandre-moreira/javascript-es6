// Array
    /*
        É um grupo de valores geralmente relacionados. Servem para
        guardarmos diferentes valores em uma única variável.
    */
   var videoGames = ['Switch', 'PS4', 'XBox'];

   videoGames[0]; // Switch
   videoGames[2]; // Xbox

   /*
        | Acesse um elemento do array
        | Utilizando [n]
   */

// Métodos e propriedades de uma Array
    var videoGames = ['Switch', 'PS4', 'XBox'];

    videoGames.pop(); // Remove o último item e retorna ele
    videoGames.push('3DS'); // Adiciona um item no final da Array
    videoGames.length; // 3

    /*
        | Existem diversos outros métodos,
        | como map, reduce, forEach e
        | mais que veremos mais à frente
    */

// For Loop
    /* Fazem algo repetidamente até que uma condição seja atingida */
    for (var numero = 0; numero < 10; numero++){
        console.log(numero)
    }
    // Retorna de 0 a 9

    /*
        | o for loop possui 3 partes
        | inicio, condição e incremento
    */

// While Loop
    var i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }
    // Retorna de 0 a 9 no console

    /* | O for loop é o mais comum */

// Arrays e Loops

var videoGames3 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames3.length; i++){
    console.log(videoGames3[i]);
}

/* | O for é o mais comum */

// Break
    /* O loop irá parar caso encontro a palavra break */
    var videoGames4 = ['Switch', 'PS4', 'XBox', '3DS'];
    for (var i = 0; i < videoGames4.length; i++){
        console.log(videoGames4[i]);
        if(videoGames4[i] === 'PS4'){
            break;
        }
    }

// forEach
    /*  ForEach é um método que executa uma função para cada item da
        Array. É uma forma mais simples de utilizarmos um loop com
        Arrays(ou array-like)    
    */

    var videoGames5 = ['Switch', 'PS4', 'XBox', '3DS'];
    videoGames5.forEach(function(item){
        console.log(item)
    });

    // O argumento item será atribuído dinamicamente.

    /*
        | Podemos passar os seguintes
        | paramentros item, index e array
    */