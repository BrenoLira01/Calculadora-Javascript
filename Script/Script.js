let tela = document.getElementById("tela");

// Função escrever botões na tela.
let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
  button.addEventListener("click", function () {
    if (tela.value === "0") {
      tela.value = "";
    }
    tela.value += button.innerText.trim();
  });
});

// Função escrever ponto.
let botaoPonto = document.querySelectorAll(".ponto");
botaoPonto.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // Verifica se já possui ponto na tela.
    if (tela.value.includes(".")) {
      return;
    }
    tela.value += botao.innerText.trim();
  });
});

// Função escrever botões de operação.
let botoesOperando = document.querySelectorAll(".operando");
botoesOperando.forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (tela.value === "0") {
      tela.value = "";
    }

    // Obtêm o útimo caractere.
    let ultimoCaractere = tela.value.slice(-1);

    // Verifica se ele é um operador.
    let ultimoCaractereEOperador = "+-x÷".includes(ultimoCaractere);

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

// Função limpar tela.
let limparTela = document.getElementById("botaoClean");
limparTela.addEventListener("click", limpar);

function limpar() {
  tela.value = "0";
}

let apagarNumero = document.getElementById("botaoBack");
apagarNumero.addEventListener("click", apagar);

// Função apagar caractere.
function apagar() {
  tela.value = tela.value.substring(0, tela.value.length - 1);

  if (tela.value === "") {
    tela.value = "0";
  }
}

// Função calcular.
let calcularNumero = document.getElementById("botaoResultado");
calcularNumero.addEventListener("click", calcular);

function calcular() {
  let tela = document.getElementById("tela").value;

  // Troca x e ÷ por * e / para que o calculo sejá realizado corretamente.
  let novaString1 = tela.replace(/x/g, "*");
  let novaString2 = novaString1.replace(/÷/g, "/");
  let novaStringFinal = novaString2;

  // Try catch (error) vai verificar se tem erros no calculo.
  try {
    // A função new Function realizará o cálculo.
    let calcular = new Function("return " + novaStringFinal);
    let resultado = calcular();
    document.getElementById("tela").value = resultado;

    // Converter o resultado em uma string.
    let resultadoString = resultado.toString();

    // Verifica se ele possui o tamanho maior que 12 caracteres.
    if (resultadoString.length > 10) {
      let resultadoEmNumero = resultado;
      let resultadoFormatado = resultadoEmNumero.toFixed(2);
      // O toFixed() vai formatar o resultado em notação ciêntifica com duas casas decimais.

      //Adiciona o resulatdo formatado a tela.
      let resultadoFinal = document.getElementById("tela");
      resultadoFinal.value = resultadoFormatado;
    }
  } catch (error) {
    // Mensagem de alerta caso dê erro.
    alert(
      "[ERRO] Desculpe, ocorreu um erro durante o cálculo. Por favor, verifique os dados inseridos e tente novamente."
    );
  }
}
