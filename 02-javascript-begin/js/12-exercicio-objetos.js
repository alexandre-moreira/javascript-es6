// Exercicio

// Crie um objeto com seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Alexandre',
    sobrenome: 'Moreira',
    idade: 41,
    cidade: 'Manaus'
}
console.log(`
    1) Dados Pessoais

    Nome: ${dados.nome}
    Sobrenome: ${dados.sobrenome}
    Idade: ${dados.idade}
    Cidade: ${dados.cidade}

`)
// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
    return `
    2) Nome completo: ${this.nome} ${this.sobrenome}
        `
}
console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
preco: 1000,
portas: 4,
marca: 'Audi',
}
console.log('3) Preço do Carro')
console.log('Preço Inicial: ' + carro.preco)
carro.preco = 3000;
console.log('Preço Atual: ' + carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem.
var cachorro = {
raca: 'Labrador',
cor: 'Preto',
idade: 10,
latir(pessoa){
    if(pessoa === 'homem'){
        return 'Latir';
    }else{
        return 'Nada';
    }
}
}
console.log('4) O cachorro deve latir se ver um homem')
console.log(cachorro.latir('homem'));

// Exercicio Tudo é objeto

// Nomei 3 propriedades ou métodos string
    var nome = 'Alexandre';
    // fixed
    // length
    // slice

// Nomei 5 propriedades ou métodos de elementos do DOM
    var btn = document.querySelector('.btn');
    // addEventListener
    // appendChild
    // id
    // innerHtml
    // outerHtml

// Busque na web um objeto (método) capaz de interagir com clipboard,
// clipboard é a parte do seu computador que lida com CTRL + C E CTRL + V.

