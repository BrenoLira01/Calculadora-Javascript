![Calculadora JavaScript](./imagens/Calculadora-JavaScript.png)

## Introdução

Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

## Índice:

- [Como impedir a repetição do ponto](#como-impedir-a-repetição-do-ponto)
- [Como evitar a adição de operadores consecutivos](#como-evitar-a-adição-de-operadores-consecutivos)
- [Como implementar notação científica](#como-implementar-notação-científica)

## Dificuldades Enfrentadas 💪

A parte mais desafiadora foi impedir a repetição do ponto e evitar a adição de operadores consecutivos. Além disso, a implementação da notação científica.

## Ver projeto 👀

Acesse o link [aqui](https://brenolira01.github.io/Calculadora-Javascript/).

## Demonstração do Projeto

![Imagem de Exemplo](./imagens/demonstração.gif)

## Como impedir a repetição do ponto?

Primeiro vamos utilizar o método `includes()`, esse método vai checar se existe um ponto na tela. Em seguida vamos usar uma estrutura de controle `if` e `else` para impedir a inserção do ponto.

Exemplo:
![includes ponto](./imagens/readme/includes-ponto.png)

Ou seja, se existe um ponto na tela sua inserção será impedida.

Em seguida vamos pegar <span style="color: lightblue;">"tela.value"</span>, valor de tela, e vamos adicionar o botão ponto, <span style="color: lightblue;">"botaoPonto.innerText"</span>

Exemplo:
![escrever ponto](./imagens/readme/escrever-ponto.png)

Resumindo, ficaria assim:
![função ponto](./imagens/readme/função-ponto.png)

## Como evitar a adição de operadores consecutivos?

Pra isso vamos obter o último caractere da tela utilizando o método `slice()`. Em seguida, usamos o método `includes()` para verificar se ele é um operador.

Exemplo:
![slice e inclui operador](./imagens/readme/slice-includes-operador.png)

Agora que temos o último caractere e sabemos se ele é um operador vamos usar a estrutura de controle`if` e `else` para permitir a substituição caso necessário.

Exemplo:
![checar operação](./imagens/readme/checar-operação.png)

O trecho <span style="color: lightblue;">"slice(0, -1)"</span> seleciona todos os caracteres da string, exceto o último. Ou seja, é como se estivéssemos apagando o último caractere.

Resumindo, ficaria assim:
![função operação](./imagens/readme/função-operação.png)

## Como implementar notação científica?

<span style="color: lightblue;"></span>
Para aplicarmos a notação científica, é necessário definir um limite de tamanho para o resultado.

por exemplo:

Fazendo o calculo 9,6 x 3 = 28.799999999999997, temos o resultado de <span style="color: lightblue;">18 caracteres</span>. Para que o resultado não seja tão grande podemos usar uma estrutura de controle como `if` e `else`.

Vamos colocar um limite de <span style="color: lightblue;">10 caracteres</span>, quando ele for ultrapassado, sera feita a notação científica.

Mas antes precisamos converter o resultado do calculo para string para obtermos o seu tamanho. Podemos fazer isso utilizando o método `.toString()`. Assim podemos saber quantos caracteres tem o resultado.

Exemplo:
![to string](./imagens/readme/to.string.png)

Agora vamos definir um limite de **10 caracteres**. Também utilizaremos o método `toFixed()` para formatar o resultado em uma casa decimal.

Exemplo:
![to fixed](./imagens/readme/to.fixed.png)

Resumindo, ficaria assim:
![notação científica](./imagens/readme/notação-científica.png)

Com isso, temos 9,6 x 3 = **28.8**

## 🧠 Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 🔍 Fontes

Os elementos adicionados ou modificados neste projeto foram obtidos de diversas fontes. Abaixo está a lista de onde cada elemento foi encontrado:

- **Ícone de apagar**: Fonte: <a href="https://icon-icons.com/pt/icone/retrocesso/152694" title="retrocesso ícones">Ícones criados por Tailwind Labs - icon-icons</a>
- **Ícone de github**: Fonte: <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</a>
- **Ícone de linkedin**: Fonte: <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones">Linkedin ícones criados por Freepik - Flaticon</a>

Agradeço aos criadores originais por disponibilizarem esses recursos.

## 🌱 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e solicitações de pull para melhorar este projeto.

## Autor

Feito por [Francisco Breno](https://www.linkedin.com/in/breno-lira-perfil).

## 📫 Contato

[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:franciscobrenolira@gmail.com)

## 📄 Licença

Este projeto é licenciado sob os termos da [Licença MIT](/LICENSE.txt).
Leia o arquivo [LICENSE](/LICENSE.txt) para obter mais detalhes sobre as permissões e restrições da Licença MIT.
