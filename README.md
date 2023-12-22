![Imagem titulo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Javascript/master/imagens/Calculadora-JavaScript-2.png)

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

![Imagem de Exemplo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Javascript/master/imagens/Calculadora-imagem-2.jpg)

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
Nome: Francisco Breno

## Contato
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:franciscobrenolira@gmail.com)

## Licença
Este projeto é licenciado sob os termos da [Licença Apache 2.0](/LICENSE.txt).
Leia o arquivo [LICENSE](/LICENSE.txt) para obter mais detalhes sobre as permissões e restrições da Licença Apache 2.0.
