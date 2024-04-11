let inserirNumeros = document.querySelectorAll(".numero");
inserirNumeros.forEach(function (button) {
  button.addEventListener("click", function () {
    if (tela.value === "0") {
      tela.value = "";
    }
    tela.value += button.innerText.trim();
  });
});

let ponto = document.querySelector(".ponto");
ponto.addEventListener("click", escreverPonto);

function escreverPonto() {
  if (tela.value.includes(".")) {
    return;
  }
  tela.value += ponto.innerText.trim();
}

let inserirOperando = document.querySelectorAll(".operando");
inserirOperando.forEach(function (botao) {
  botao.addEventListener("click", function () {
    let ultimoCaractere = tela.value.slice(-1);
    let substituirOperador = "+-x÷".includes(ultimoCaractere);

    if (tela.value === "0") {
      tela.value = "";
    }
    if (substituirOperador) {
      tela.value = tela.value.slice(0, -1) + botao.innerText.trim();
    } else {
      tela.value += botao.innerText.trim();
    }
  });
});

let botaoClean = document.getElementById("botaoClean");
botaoClean.addEventListener("click", limpar);

function limpar() {
  tela.value = "0";
}

let botaoBack = document.getElementById("botaoBack");
botaoBack.addEventListener("click", apagar);

function apagar() {
  tela.value = tela.value.slice(0, -1);
  if (tela.value === "") {
    tela.value = "0";
  }
}

let botaoResultado = document.getElementById("botaoResultado");
botaoResultado.addEventListener("click", calcular);

function calcular() {
  let tela = document.getElementById("tela").value;
  let simbolosAlterados = tela.replace(/x/g, "*").replace(/÷/g, "/");

  try {
    let calcular = new Function("return " + simbolosAlterados);
    let resultado = calcular();

    let resultadoString = resultado.toString();
    if (resultadoString.length > 10) {
      resultado = resultado.toFixed(1);
    }
    document.getElementById("tela").value = resultado;
  } catch (error) {
    alert("[ERRO] Por favor, verifique os dados inseridos e tente novamente.");
  }
}
