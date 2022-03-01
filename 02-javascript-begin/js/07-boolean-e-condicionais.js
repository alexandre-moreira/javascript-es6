// Boolean
// Existem dois valores booleanos true ou false

    var possuiGraducao = true;
    var possuiDoutorado = false;

// Condicionais If e Else
    var possuiMestrado = true;

    if(possuiMestrado){
        console.log('Possui Mestrado');
    }else{
        console.log('Não Possui Mestrado');
    }
    // retorna Possui Graduação e não executa o else 

    /*
        | O valor dentro dos parenteses 
        | sempre será avaliado em true ou  
        | ou false  
    */

// Codicionais Else If
    var temGraducao = true;
    var temDoutorado = false;

    if(temDoutorado){
        console.log('Tem graduação e doutorado')
    }else if(temGraducao){
        console.log('Tem graduação, nas não tem doutorado.')
    }else{
        console.log('Não tem graduação')
    }
    // restorna tem graduação, mas não tem doutorado.

// Truthy e Falsy
/*
    Existem valores que retornam true e outros que retornam
    false, quando verificados em uma expressão booleana
*/
    //Falsy
        if(false);
        if(0); // ou -0
        if(NaN);
        if(null);
        if(undefined);
        if(''); // ou "" ou ``
            // Todo o resto é truthy
    
    // Truthy
        if(true);
        if(1); // ou -0
        if(' ');
        if('alex');
        if(-5);
        if({}); // ou "" ou ``

// Operador Lógico de negação
    /*
        O operador !, nega uma operação booleana, ou seja !true é
        igual a false.
    */

    //Truthy
        if(!true); // false
        if(!1); // false
        if(!'');  // true
        if(!undefined); //true
        if(!!' '); //true
        if(!!''); //false
        /*
            Dica, você pode utilizar !!
            para verificar se uma expressão
            é Truthy ou Falsy
        */

// Operadores de comparação
    /*
        Vão sempre retornar um valor booleano.
    */

        10 > 5;   // true
        5 > 10;   // false
        20 < 10;  // false
        10 <= 10; // true
        10 >= 11; // false

// Operadores de comparação
    /*
        O == faz uma comparação não tão estrita e o === faz uma comparação
        estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos.
    */

        10 == '10'; // true
        10 == 10; // true
        10 === '10'; // false
        10 === 10; // true
        10 != 15; // true
        10 != '10'; // false
        10 !== '10' // true

// Operadores lógicos &&(And)
    /*
        && Compara se uma expressao e a outra é verdadeira    
    */
    
        true && true; // true
        true && false; // false
        'Gato' && 'Cão'; // 'Cão'
        (5 - 5) && (5 + 5); // 0
        'Gato' && false; // false
        (5 >= 5) && (3 < 6) // true
    /*
        | Se ambos os valores forem true
        | ele irá retornar o ultimo valor
        | verificando Se algum valor for 
        | for false ele irá retornar o mesmo e
        | não irá continuar e verificar os
        | próximos.
    */


// Operadores lógicos ||(Or)
    /*
        || Compara se uma expressao ou outra é verdadeira    
    */
    
        true || true; // true
        true || false; // true
        false || true; // true
        'Gato' || 'Cão'; // 'Gato'
        (5 - 5) || (5 + 5); // 10
        'Gato' || false; // Gato
        (5 >= 5) || (3 < 6) // true
    /*
        | Retorna o primeiro valor true
        | que encontrar.
    */

// Switch
    /*
        Como o switch, você pode verificar se uma variável é igual à
        diferentes valores utilizando o case. Caso ela seja igual, você
        pode fazer alguma coisa e utilizar a palavra chave break; para
        cancelar a continuação. O valor de default ocorrerá caso nenhuma
        das anteriores seja verdadeira.
    */

    var corFavorita = 'Azul';

    switch(corFavorita){
        case 'Azul':
            console.log('Olhe para o céu.');
            break;
        case 'Vermelho':
            console.log('Olhe para as Rosas');
            break;
        case 'Amarelo':
            console.log('Olhe para o sol');
            break;
        default:
            console.log('Feche os olhos.')


    }