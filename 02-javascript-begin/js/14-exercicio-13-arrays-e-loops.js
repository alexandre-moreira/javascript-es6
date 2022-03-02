// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anoTitulo = [1959, 1962, 1970, 1994, 2002]
// Iteraja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, ` O Brasil ganhou a copa de ${ano}
    for(let i = 0; i < anoTitulo.length; i++){
        console.log(`O Brasil ganhou a copa de ${anoTitulo[i]}`)
    }

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.
    var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

    for(let i = 0; i < frutas.length; i++){
        console.log(`${[i + 1]} ${frutas[i]}`)
        if(frutas[i] === 'Pera'){
            break;
        }
    }
// Coloque a última fruta da array acima de uma variável,
// sem remover a mesma do array.
    var ultimaFruta = frutas[frutas.length -1];
    console.log(ultimaFruta);