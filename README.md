![Calculadora JavaScript](./imagens/Calculadora-JavaScript.png)

## Índice:
- [Como impedir a repetição do ponto](#como-impedir-a-repetição-do-ponto)
- [Como evitar a adição de operadores consecutivos](#como-evitar-a-adição-de-operadores-consecutivos)
- [Como implementar notação científica](#como-implementar-notação-científica)

## Introdução
Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

## Dificuldades Enfrentadas 💪
A parte mais desafiadora foi impedir a repetição do ponto e evitar a adição de operadores consecutivos. Além disso, a implementação da notação científica.

## 👀 Ver projeto
Acesse o link [aqui](https://brenolira01.github.io/Calculadora-Javascript/).

## Demonstração do Projeto
![Imagem de Exemplo](./imagens/demonstração.gif)

## Como impedir a repetição do ponto?
Neste trecho de código vamos usar o método `includes()` pra checar se existe um ponto na tela, juntamente com uma estrutura de controle, __if__ e __else__.

![Inclui ponto](./imagens/readme/includes-ponto.png)

Caso tenha, o __return;__ vai impedir que outro ponto seja adicionado.

## Como evitar a adição de operadores consecutivos?
Pra isso vamos obter o último caractere da tela utilizando o método `slice()`. Em seguida, usamos o método `includes()` para verificar se ele é um operador.

![Slice e inclui operador](./imagens/readme/slice-includes-operador.png)

Agora vamos usar a estrutura de controle `if` e `else` para permitir a substituição caso necessário.

Também vamos usar o método `slice(0, -1)`. Mas o que ele faz?

 Ele selecionando todos os caracteres da string, exceto o último. Ou seja, é como se estivéssemos apagando o último caractere.

![Botão de operação](./imagens/readme/Botão-de-operação.png)

## Como implementar notação científica?
Para aplicarmos a notação científica, é necessário definir um limite de tamanho para o resultado.

por exemplo:

Fazendo o calculo 9,6 x 3 = 28.799999999999997, temos o resultado de __18 caracteres__. Para que o resultado não seja tão grande podemos usar uma estrutura de controle como __if__ e __else__.

Vamos colocar um limite de __10 caracteres__, quando ele for ultrapassado, sera feita a notação.

Mas antes precisamos converter o resultado para __string__ para obtermos o seu tamanho. Podemos fazer isso utilizando o método `.toString()`. Assim podemos saber quantos caracteres tem o resultado.

![To string](./imagens/readme/to.string.png)

Agora vamos definir um limite de __10 caracteres__. Também utilizaremos o método `toFixed()` para formatar o resultado em uma casa decimal.

![To fixed](./imagens/readme/to.fixed.png)

Com isso, temos 9,6 x 3 = __28.8__

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
