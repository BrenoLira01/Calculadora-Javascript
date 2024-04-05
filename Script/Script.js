let tela = document.getElementById("tela");

// Função escrever botões na tela.
let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
  button.addEventListener("click", function () {

   // Apaga o zero inicial.
    if (tela.value === "0") { 
      tela.value = "";
    }
      tela.value += button.innerText.trim();
  });
});

// Função escrever ponto.
let botaoPonto = document.querySelector(".ponto");
botaoPonto.addEventListener("click", escreverPonto);

function escreverPonto() {
    if (tela.value.includes(".")) {
      return;
    } else {
      tela.value += botaoPonto.innerText.trim();
    }
}

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
    let CaractereOperador = "+-x÷".includes(ultimoCaractere);

     // Substituir operador por outro.
    if (CaractereOperador) {

      // Slice(0, -1) vai apagar o último caractere.
      tela.value = tela.value.slice(0, -1);

      // Em seguida adicionamos um novo.
      tela.value += botao.innerText.trim();

    } else {
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
  tela.value = tela.value.slice(0, -1);

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
  let multiplicação = tela.replace(/x/g, "*");
  let divisão = multiplicação.replace(/÷/g, "/");
  let formataçãoFinal = divisão;

  try {
    let calcular = new Function("return " + formataçãoFinal);
    let resultado = calcular();
    document.getElementById("tela").value = resultado;

 // Verifica se ele possui o tamanho maior que 10 caracteres para notação científica.
    let resultadoString = resultado.toString();
    if (resultadoString.length > 10) {
      let resultadoFormatado = resultado.toFixed(1);
      let tela = document.getElementById("tela");
      tela.value = resultadoFormatado;
    }

  } catch (error) {
    alert(
      "[ERRO] Desculpe, ocorreu um erro durante o cálculo. Por favor, verifique os dados inseridos e tente novamente."
    );
  }
}
