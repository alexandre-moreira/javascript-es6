// Document Object Model (DOM)
    /*
        É uma interface que representa documentos Html e XML através
        de objetos. Com ela é possível manipular a estrutra, estilo e conteúdo destes documentos.
    */
        console.log(window);
        // window é o objeto global do browser
        // possui diferentes métodos e propriedades
     
        window.innerHeight; // retorna a altura do browser
     
        /*
             Ao inspecionar o elemento com o Chrome, você estpa vendo com a representação oficial do DOM.
        */
     
     // Arvore DOM
     // https://tableless.com.br/entendendo-o-dom-document-object-model/
     
     // Window e Document
     /*
         São os objetos principais do DOM. boa parte da manipulação é feita
         através dos seus métodos e propriedades.
     */
     
     window.alert('Isso é um alerta');
     alert('Isso é um alerta'); // Funciona
     
     document.querySelector('h1'); // Seleciona o primeiro h1
     document.body; // retorna o body
     
     /*
         window é o objeto global, por
         isso nao precisamos chamar ele
         na frente dos seu métodos e
         propriedades.
     */
     
     // Node
         /*
             Toda tag html é representada pelo objeto Element e por isso herda
             os seus métodos e propriedades. Element é um tipo de objeto Node.
         */
         const titulo = document.querySelector('h1');
     
         titulo.innerText; // retorna o texto;
         titulo.classList; // retonar as class;
         titulo.id; // retorna o id
         titulo.offsetHeight; // retorna a altura do elemento;
     
         titulo.addEventListener('click', callback);
         // ativa a função callback ao click no titulo.