let tela = document.getElementById("tela");

let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
    button.addEventListener("click", function () {

        if (tela.value === "0") {
            tela.value = ""
        }
        tela.value += button.innerText.trim();
    });
});

let botaoPonto = document.querySelectorAll(".ponto");
botaoPonto.forEach(function (botao) {
    botao.addEventListener("click", function () {

        if (tela.value.includes(".")) {
            return;
        }
        tela.value += botao.innerText.trim();
    });
});

let botoesOperando = document.querySelectorAll(".operando");
botoesOperando.forEach(function (botao) {
    botao.addEventListener("click", function () {

        if (tela.value === "0") {
            tela.value = ""
        }

        let ultimoCaractere = tela.value.slice(-1);
        let ultimoCaractereEOperador = "+-x÷".includes(ultimoCaractere);

        if (!ultimoCaractereEOperador) {
            tela.value += botao.innerText.trim();
        }
        else {
            tela.value = tela.value.substring(0, tela.value.length - 1);
            tela.value += botao.innerText.trim();
        }
    });
});

let limparTela = document.getElementById("botaoClean");
limparTela.addEventListener("click", limpar);

function limpar() {
    tela.value = "0"
};

let apagarNumero = document.getElementById("botaoBack");
apagarNumero.addEventListener("click", apagar);

function apagar() {
    tela.value = tela.value.substring(0, tela.value.length - 1);

    if (tela.value === "") {
        tela.value = "0"
    }
};

let calcularNumero = document.getElementById("botaoResultado");
calcularNumero.addEventListener("click", calcular);

function calcular() {
    let tela = document.getElementById("tela").value;

    let novaString1 = tela.replace(/x/g, "*");
    let novaString2 = novaString1.replace(/÷/g, "/");
    let novaStringFinal = novaString2;

    try {
        let calcular = new Function('return ' + novaStringFinal);
        let resultado = calcular();
        document.getElementById("tela").value = resultado;

        let resultadoString = resultado.toString();

        if (resultadoString.length > 10) {
            let resultadoEmNumero = resultado
            let resultadoFormatado = resultadoEmNumero.toFixed(2);
            let resultadoFinal = document.getElementById("tela");
            resultadoFinal.value = resultadoFormatado
        }
    } catch (error) {
        let tela = document.getElementById("tela");
        tela.value = tela.value.substring(0, tela.value.length - 1);
        
        if (tela.value === "") {
            tela.value = "0"
        }
    }
};