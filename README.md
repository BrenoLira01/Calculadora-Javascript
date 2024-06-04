![Calculadora JavaScript](./imagens/Calculadora-JavaScript.png)

## Introdução

Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

Clique [aqui](https://brenolira01.github.io/Calculadora-Javascript/) para ver o projeto.

## Dificuldades Enfrentadas

A parte mais desafiadora foi impedir a repetição do ponto e evitar a adição de operadores consecutivos. Além disso, a implementação da notação científica.

<details>
  <summary>Como impedir a repetição do ponto</summary>
  
## Como impedir a repetição do ponto

Primeiro precisamos checar se já existe ponto na tela. Pra isso, vamos utilizar o método `includes()`.

Exemplo:

```javascript
tela.value.includes(".")
```

Em seguida vamos usar uma estrutura de controle `if` e `else`.

Exemplo:

```javascript
if (tela.value.includes(".")) {
    return; 
  } else {
    tela.value += ponto.innerText;
  }
```
O `return` serve para encerrar a execução da função, impedindo a inserção do ponto. E o ``else`` é pra caso o contrário o código segue normalmente.

Código completo:

```javascript
tela.value.includes(".")

if (tela.value.includes(".")) {
    return; 
  } else {
    tela.value += ponto.innerText;
  }
```
</details>

<details>

  <summary>Como evitar a adição de operadores consecutivos</summary>
  
## Como evitar a adição de operadores consecutivos

Pra isso vamos obter o último caractere da tela utilizando o método `slice()`.

```javascript
// Obtêm o último caractere.
let ultimoCaractere = tela.value.slice(-1);
```

 Em seguida, usamos o método `includes()` para verificar se ele é um operador.

```javascript
// verifica se ele é um operador.
let substituirOperador = "+-x÷".includes(ultimoCaractere);
```

Agora que temos o último caractere e sabemos se ele é um operador vamos usar a estrutura de controle`if` e `else` para permitir a substituição caso necessário.

Exemplo:

```javascript
if (substituirOperador) {
      tela.value = tela.value.slice(0, -1) + botao.innerText;
    } else {
      tela.value += botao.innerText;
    }
```
O trecho ``.slice(0, -1)`` seleciona todos os caracteres da String, exceto o último. É como se estivéssemos apagando o último caractere da tela. Em seguida o ``+ botao.innerText`` coloca um novo.

O ``else`` é pra caso o contrário o código segue normalmente.

Código completo:

```javascript
let ultimoCaractere = tela.value.slice(-1);

let substituirOperador = "+-x÷".includes(ultimoCaractere);

if (substituirOperador) {
      tela.value = tela.value.slice(0, -1) + botao.innerText;
    } else {
      tela.value += botao.innerText;
    }
```

</details>

<details>

  <summary>Como implementar notação científica</summary>
  
## Como implementar notação científica

<span style="color: lightblue;"></span>
Para aplicarmos a notação científica, é necessário definir um limite de tamanho para o resultado.

por exemplo:

Fazendo o calculo 9,6 x 3 = 28.799999999999997, temos o resultado de ``18 caracteres``. Para que o resultado não seja tão grande podemos usar uma estrutura de controle como `if` e `else`.

Vamos colocar um limite de ``10 caracteres``, quando ele for ultrapassado, sera feita a notação científica.

Mas antes precisamos converter o resultado do calculo para string para obtermos o seu tamanho utilizando `.toString()`. Assim podemos saber quantos caracteres tem o resultado.

Exemplo:

```javascript
let resultadoString = resultado.toString();
```

Agora vamos definir um limite de **10 caracteres**. Também utilizaremos o método `toFixed()` para formatar o resultado em uma casa decimal.

Exemplo:

```javascript
if (resultadoString.length > 10) {
      resultado = resultado.toFixed(1);
    }
```

Com isso, temos 9,6 x 3 = **28.8**

</details>

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Fontes

Os elementos adicionados ou modificados neste projeto foram obtidos de diversas fontes. Abaixo está a lista de onde cada elemento foi encontrado:

- **Ícone de apagar**: Fonte: <a href="https://icon-icons.com/pt/icone/retrocesso/152694" title="retrocesso ícones">Ícones criados por Tailwind Labs - icon-icons</a>
- **Ícone de github**: Fonte: <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</a>
- **Ícone de linkedin**: Fonte: <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones">Linkedin ícones criados por Freepik - Flaticon</a>

Agradeço aos criadores originais por disponibilizarem esses recursos.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e solicitações de pull para melhorar este projeto.

## Contato

- [Email](mailto:franciscobrenolira@gmail.com)

## Licença

Este projeto é licenciado sob os termos da [Licença MIT](/LICENSE.txt).
Leia o arquivo [LICENSE](/LICENSE.txt) para obter mais detalhes sobre as permissões e restrições da Licença MIT.
