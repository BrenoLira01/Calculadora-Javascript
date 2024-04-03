![Calculadora JavaScript](./imagens/Calculadora-JavaScript-2.png)

# Introdução

Este projeto é uma calculadora simples criada com HTML, JavaScript e CSS. Foi desenvolvido como parte do aprendizado dessas tecnologias, com foco especial na interação entre botões usando JavaScript.

## 👀 Ver projeto

Acesse o link [aqui](https://brenolira01.github.io/Calculadora-Javascript/).

<div align="center">
  <img src="./imagens/Calculadora-imagem-2.png" alt="Calculadora">
</div>

# Dificuldades Enfrentadas 💪

A parte mais desafiadora foi impedir a repetição do ponto e evitar a adição de operadores consecutivos. Além disso, a implementação da notação científica.

## Como impedir a repetição do ponto ? 🤔

Neste trecho de código, verificamos se já existe um ponto na tela com o método `includes()`. Isso impede a adição de mais de um ponto decimal quando o botão de ponto é clicado.

![Inclui ponto](./imagens/readme/includes-ponto.png)

Essa abordagem visa evitar a entrada de números inválidos, garantindo que apenas um ponto decimal seja adicionado à tela.

![Inclui ponto](./imagens/readme/Escrever-ponto.png)

## Como evitar a adição de operadores consecutivos ? 🤔

Neste trecho, obtemos o último caractere da tela para determinar se é um operador. Isso é realizado utilizando o método `slice()` seguido pelo `includes()`.

![Slice e inclui operador](./imagens/readme/slice-includes-operador.png)

Posteriormente, com o uso de `if` e `else`, verificamos se o último caractere na tela é um operador. Caso seja, permitimos a substituição, possibilitando a troca de um operador por outro, se necessário.

![Botão de operação](./imagens/readme/Botão-de-operação.png)

## Como implementar notação científica ? 🤔

Para isso, vamos converter o resultado em uma string utilizando `.toString()`, a fim de obter seu tamanho. Isso nos permite verificar se ele ultrapassa 12 caracteres.

![To string](./imagens/readme/to.string.png)

Se for maior, utilizamos o método `.toFixed()` para limitar o resultado a duas casas decimais, e em seguida o adicionamos à tela.

![To fixed](./imagens/readme/to.fixed.png)

Decidi utilizar a função `new Function()` em lugar de `eval()` por razões de segurança.

![Função calcular](./imagens/readme/Função-calcular.png)

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
