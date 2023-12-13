![Imagem titulo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Simples-Javascript/master/imagens/Calculadora-JavaScript.png)

## Introdução
Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

## Tecnologias Utilizadas
- HTML
- JavaScript
- CSS

## Como Usar

1. Acesse o link [aqui](https://brenolira01.github.io/Calculadora-Javascript/).
2. Interaja com a calculadora pressionando os botões.

## Meu Projeto

![Imagem de Exemplo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Simples-Javascript/master/imagens/Calculadora-imagem.png)

## Dificuldades Enfrentadas
A parte mais desafiadora foi a interação entre os botões na implementação JavaScript.

## Exemplo de Código
Aqui está um exemplo de como lidar com a interação de botões em JavaScript:

```javascript

// Seleciona a tela onde os números serão exibidos.
var tela = document.getElementById("tela");

// Seleciona todos os botões numéricos.
var botoesNumericos = document.querySelectorAll(".button");

// Adiciona um evento de clique para cada botão numérico.
botoesNumericos.forEach(function (button) {
    button.addEventListener("click", function () {

        // Adiciona o texto do botão à tela, removendo espaços em branco extras.
        tela.innerText += button.innerText.trim();
    });
});
```

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e solicitações de pull para melhorar este projeto.

## Autor
Nome: Francisco Breno Lira Almeida

Contato: [![Email](https://camo.githubusercontent.com/b91298c2ca9ef429dc20a8887eca7996dfd6e630c648a62805a17a4743ab9c16/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d736575656d61696c40656d61696c2e636f6d2d3030366265643f7374796c653d666c61742d737175617265266c6f676f3d476d61696c266c6f676f436f6c6f723d7768697465266c696e6b3d6d61696c746f3a64616e696c6f2e73696c76612e73616e746f732e31333132406f75746c6f6f6b2e636f6d)](mailto:franciscobrenolira@gmail.com)

## Licença
Este projeto é licenciado sob os termos da [Licença Apache 2.0](/LICENSE.txt).
Leia o arquivo [LICENSE](/LICENSE.txt) para obter mais detalhes sobre as permissões e restrições da Licença Apache 2.0.
