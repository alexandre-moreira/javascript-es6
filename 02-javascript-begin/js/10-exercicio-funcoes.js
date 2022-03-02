// Crie ums função para verificar se um valor é Truthy
function isTruthy(dado){
    return !!dado;
}
console.log('1) O valor é: ' + isTruthy(23));

// Crie uma função matematica que retorne o perimetro de um quadrado
// lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    return lado * 4;
}
console.log('2) O perimetro do quadrado é: ' + perimetroQuadrado(5))

//Crie uma função que retorne o seu nome completo
// ela deve possuir os parametros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome}  ${sobrenome}`  
}
console.log('3) Nome completo: '+ nomeCompleto('Alexandre', 'Moreira'))

//Crie uma função que verifica se um número é par.
function numeroPar(numero){
    if(numero % 2 === 0){
        return ` O número ${numero} é par`;
    }else{
        return ` O número ${numero} é impar`;
    }
}
console.log('4)' + numeroPar(3))

// Crie uma função que retorne o tipo de
// dados do argumento passado nela(typeof)
function tipoDeDado(dado){
    return typeof dado;
}
console.log('5) O tipo de dado é: ' + tipoDeDado('teste'))

// addEventListerner é uma função nativa do Javascript
// o primeiro parametro é o evento que ocorre e segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
    console.log('6) Alexandre Moreira')
})


