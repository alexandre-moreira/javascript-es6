// Objetos
    /*
        Conjunto de variáveis e funções, que são chamadas de
        propriedades e métodos.
    */
        var pessoa = {
            nome: 'Alexandre',
            idade: 41,
            profissao: 'Software Engineer',
            possuiFaculdade: false,
        }
        pessoa.nome; // 'Alexandre'
        pessoa.possuiFaculdade; // false
    /*
        | Propriedades e métodos consistem
        | em nome (chava) e valor.
    */

// Métodos
    /*
        É uma propriedade que possui uma função no local do seu valor
    */
        var quadrado = {
            lados: 4,
            area: function(lado){
                return lado * lado
            },
            perimetro:function(lado){
                return this.lados * lado;
            },
        }

        quadrado.lados; // 4
        quadrado.area(5); // 25
        quadrado.perimetro(5); // 20

// Organizar o Código
    /*
        Os objetos servem para organizar o código em pequenas partes
        reutilizáveis.
    */
   Math.PI; // 3.14
   Math.random(); // número aleatório

   var pi = Math.PI;
   console.log('O valor de PI: ' + pi); // 3.14

   /*
        | Math é um objetivo nativo de
        | JavaScript. Já percebeu que
        | console é um objeto e log() um
        | método.
   */

// Cria um Objeto
    /*
        Um objeto é criado utilizando as chaves{}
    */
   var carro  = {};
   var pessoa = {};

   console.log(typeof carro);

// Dot Notation Get
    /*
        Acesse propriedades de um objeto utilizando o ponto.
    */
        var menu = {
            width: 800,
            height: 50,
            backgroundColor: '#84E'
        }
        
        var bg = menu.backgroundColor; // '#84E'

// Adicionar propriedades e métodos
    /*
        Basta adicionar um novo nome e definir o valor.
    */
        var menu = {
            width: 800,
        }
        
        menu.height = 50;
        menu.position = 'fixed';

// Palavra-chave this
    /*
        this irá fazer uma referência ao próprio objeto.
    */
        var height = 120;
        var menu = {
            width: 800,
            height: 50,
            metadeHeight(){
                return this.height / 2;
            }
        }

        menu.metadeHeight(); // 25
        // sem o this, seria 60;

        /*
            | this irá retornar o próprio
            | objeto.
        */
        
        menu.height = 50;
        menu.position = 'fixed';

// Protótipo e Herança
    /*
         O objeto herda propriedades e métodos do objeto que foi utilizado
         para criar o mesmo.   
    */
   var menu = {
       width: 800,
   }

   menu.hasOwnProperty('width'); // true
   menu.hasOwnProperty('height'); // false

   /*
        | hasOwnProperty é um método de
        | Object.
   */

// Tudo é Objeto
    /*
    String, Números, Boolean, Objetos e mais, possuem propriedades
    e métodos. Por isso são objetos.
    */
   var nome = 'Alexandre';

   nome.length; // 9
   nome.charAt(1); // l
   nome.replace('dre', 'dri'); // Alexandri
   nome; // Alexandre

   /* 
        | Uma string herda propriedades e 
        | métodos do construtor String()
   */

// Números
   var altura = 1.8;
   altura.toString(); // '1.8'
   altura.toFixed(); // '2'

   /*
        | Por um breve momento o número é
        | envolvido em um objeto (coerção), tendo acesso assim as
        | suas propriedades.
   */

// Funções
   function areaQuadrado(lado){
       return lado * lado
   }

   areaQuadrado.toString();
   // "function areaQuadrado(lado) {
   //   return lado * lado;
   // }"

   areaQuadrado.length; // 1

// Elementos do DOM
    <a class="btn">Clique</a>

    var btn = document.querySelector('.btn');

    btn.classList.add('azul') // adiciona
    btn.innerText; //'click'
    btn.addEventListener('click', function(){
        console.log('clicou')
    })
    /*
        | Praticamente todos os efeitos
        | como Js são feitos utilizando
        | propriedades e métodos de
        | objetos do DOM.
    */

    //Objetos revolucionaram a programação
        /*
            Web API's são metodos e propriedades que permitem a
            interação JavaScript no Browswer
        */
       

