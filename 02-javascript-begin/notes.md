# Antes de iniciarmos
- Criar um documento Html(index.html).
- Criar uma pasta chamada js
- Criar um documento Javascript(script.js), dentro da pasta js.
- Linkar o script ao Html
 <script src="js/script.js"></script>

# Variáveis
- Responsáveis por guardar dados na memória.
- Pode iniciar com as palavras, var, let ou const
    * var   -> Escopo Global
    * let   -> Escopo de bloco
    * const -> Valores que não mudam ao longo do tempo.
    Ex02:
        var nome = "Alex";
        let idade = 41;
        const possueFaculdade = true;
        console.log(nome, idade, possuiFaculdade)
    Ex02:
        var preco = 20;
        var totalComprado = 5;
        var precoTotal = preco * totalComprado;

## Como nomear uma variáve?
* Nome -> Os nomes podem inicar com $, _, ou letras
    - Podem conter número, não iniciar com eles.
* Case sensitive
    - nome é diferente de Nome.
* Não utilizar Palavras reservadas
    - https://www.w3schools.com/js/js_reserved.asp
* Camel case
    - É comum nomearmos assim: abrirModal
* Nomes Invalidos
    var &nome;
    var function;
    var 1possuiFaculdade
* Nomes Validos
    var $selecionar;
    var _nome;
    var possuiFaculdadeNoExterior;
## Declarar variáveis
- Será mostrado um erro, caso tente utilizar uma variável que não foi declarada.
    Ex:
    console.log(nome);
    //retorna nome is not defined.
## Hoisting
- São movidas para cima do código, porem o valor atribuído não é movido.

Ex01:
    console.log(nome);
    var nome = 'Alex';
    // Retorna undefined

Ex02:
    var profissao = 'FrontEnd';
    console.log(profissao);
    // Retorna FronEnd

# Exercicio Variáveis
- Dica rápida, frases(string), devem ser colocadas entre as aspas
(simples ou duplas) e numeros não levam aspas.

## Exercicio
- Declarar uma variável com seu nome
    var nome = 'Alexandre';

- Declarar uma variável com sua idade
    var idade = 41;

- Declarar uma variável com sua comida favorita e não atribuir valor.
    var comidaFavorita;

- Atribuir valor a sua comida favorita
    comidaFavorita = 'Lasanha';

- Declarar 5 variáveis diferentes sem valores.
    var nota1, nota2, nota3, nota4, media;





