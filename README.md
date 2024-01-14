![Imagem titulo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Javascript/master/imagens/Calculadora-JavaScript-2.png)

## Introdução
Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

## Como Usar

1. Acesse o link [aqui](https://brenolira01.github.io/Calculadora-Javascript/).
2. Interaja com a calculadora pressionando os botões.

## Meu Projeto

![Imagem de Exemplo](https://raw.githubusercontent.com/BrenoLira01/Calculadora-Javascript/master/imagens/Calculadora-imagem-2.jpg)

## Dificuldades Enfrentadas 😓
A parte mais desafiadora foi impedir a repetição do ponto e evitar a adição de operadores consecutivos. Além disso, a implementação da notação científica.

## Como impedir a repetição do ponto ? 🤔

Neste trecho de código, verificamos se já existe um ponto na tela com o método includes(). Isso impede a adição de mais de um ponto decimal quando o botão de ponto é clicado.

Essa abordagem visa evitar a entrada de números inválidos, garantindo que apenas um ponto decimal seja adicionado à tela.

```javascript

// ESCREVER PONTO
let botaoPonto = document.querySelectorAll(".ponto");
botaoPonto.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Verifica se já possui um ponto na tela.
        if(tela.value.includes(".")) {
            return;
        }
        tela.value += botao.innerText.trim();
    });
});
```

## Como evitar a adição de operadores consecutivos ? 🤔

Neste trecho, obtemos o último caractere da tela para determinar se é um operador. Isso é realizado utilizando o método slice() seguido pelo includes().

Posteriormente, com o uso de if e else, verificamos se o último caractere na tela é um operador. Caso seja, permitimos a substituição, possibilitando a troca de um operador por outro, se necessário.

```javascript

// ESCREVER BOTÕES DE OPERAÇÃO
let botoesOperando = document.querySelectorAll(".operando");
botoesOperando.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Obtêm o último caractere.
        let ultimoCaractere = tela.value.slice(-1);

        // Verificar se ele é um operador.
        let ultimoCaractereEOperador = "+-x/".includes(ultimoCaractere);

         // Caso não seja, será adicionado.
        if (!ultimoCaractereEOperador) {
            tela.value += botao.innerText.trim();
        }

        // Se for, será substituido por outro.
        else {
            tela.value = tela.value.substring(0, tela.value.length - 1);
            tela.value += botao.innerText.trim();
        }
    });
});
```

## Como implementar notação científica ? 🤔

Para isso, vamos converter o resultado em uma string utilizando .toString(), a fim de obter seu tamanho. Isso nos permite verificar se ele possui mais de 12 caracteres.

Se for maior, utilizamos o método .toFixed() para limitar o resultado a duas casas decimais.

Infelizmente, não consegui implementar a notação científica utilizando o função eval(). Por isso, o substituí por new Function().

```javascript

// fUNÇÃO CALCULAR
let calcularNumero = document.getElementById("botaoResultado");
calcularNumero.addEventListener("click", calcular);

function calcular() {

    let tela = document.getElementById("tela").value;

        let calcular = new Function('return ' + novaString);
        let resultado = calcular();

        document.getElementById("tela").value = resultado;

        // Converter resultado em uma string.
        let resultadoString = resultado.toString();

        // verificar se ele possui mais de 12 caracteres.
        if (resultadoString.length > 12){
            let resultadoEmNumero = resultado
            let resultadoFormatado = resultadoEmNumero.toFixed(2);
            //utilizamos .toFixed() para limitar o resultado a duas casas decimais.
            let resultadoFinal = document.getElementById("tela");
            resultadoFinal.value = resultadoFormatado
        }
    }
```

## 🧠 Tecnologias Utilizadas
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e solicitações de pull para melhorar este projeto.

## Autor
Nome: Francisco Breno

## Contato
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:franciscobrenolira@gmail.com)

## Licença
Este projeto é licenciado sob os termos da [Licença Apache 2.0](/LICENSE.txt).
Leia o arquivo [LICENSE](/LICENSE.txt) para obter mais detalhes sobre as permissões e restrições da Licença Apache 2.0.
