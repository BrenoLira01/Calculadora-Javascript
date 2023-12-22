let tela = document.getElementById("tela");

// ESCREVER NUMÉROS NA TELA.
let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
    button.addEventListener("click", function () {
        
        // Apaga o zero no começo da tela.
        if (tela.innerText === "0") {
            tela.innerText = ""
        }

        //  Tamanho máximo de 12 caracteres.
        if (tela.innerText.length < 10) {

        // Vai escrever botões na tela. O 'trim' remove espaços em branco extras.
            tela.innerText += button.innerText.trim();
        }
    });
});

// ESCREVER PONTO.
let botaoPonto = document.querySelectorAll(".ponto");
botaoPonto.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Concatena o zero com ponto.
        if (tela.innerText === "0") {
            tela.innerText = tela.innerText += botao.innerText.trim();
        }

        // Só permite um único ponto na tela.
        if(tela.innerText.includes(".")) {
            return;
        }
            tela.innerText += botao.innerText.trim();
    });
});

// ESCREVER BOTÕES DE OPERAÇÃO.
let botoesOperando = document.querySelectorAll(".operando");
botoesOperando.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Concatena o zero com botão de operação.
        if (tela.innerText === "0") {
            tela.innerText = tela.innerText += botao.innerText.trim();
        }

        // Obtêm o  último caractere
        let ultimoCaractere = tela.innerText.slice(-1);

        // Verificar se ele é um operador.
        let ultimoCaractereEOperador = "+-x/".includes(ultimoCaractere);

         // Caso não seja, adicioma um operador.
        if (!ultimoCaractereEOperador) {
            tela.innerText += botao.innerText.trim();
        }

        // permite substituir um operador por outro.
        else {
            tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
            tela.innerText += botao.innerText.trim();
        }
    });
});

//LIMPAR TELA
let limparTela = document.getElementById("botaoClean");
limparTela.addEventListener("click", limpar);

function limpar() {
    tela.innerText = "0"
};

//APAGAR UM CARACTERE
let apagarNumero = document.getElementById("botaoBack");
apagarNumero.addEventListener("click", apagar);

function apagar() {
    tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);

    if (tela.innerText === "") {
        tela.innerText = "0"
    }
};

//fUNÇÃO CALCULAR
let calcularNumero = document.getElementById("botaoResultado");
calcularNumero.addEventListener("click", calcular);

function calcular() {

    let tela = document.getElementById("tela").innerHTML;
    let ultimoCaractere = tela.slice(-1);
    let ultimoCaractereEOperador = "+-x/".includes(ultimoCaractere);

    // Troca o 'x' por '*'
    let novaString = tela.replace(/x/g, "*");

    // Se o último caractere NÃO for um operador o calculo será feito.
    if (!ultimoCaractereEOperador) {
        let calcular = new Function('return ' + novaString);
        let resultado = calcular();

        document.getElementById("tela").innerHTML = resultado;

        //Quando ultrapassar 11 caracteres, é feito uma notação ciêntifica.
        let resultadoString = resultado.toString();

        if (resultadoString.length > 11){
            let resultadoEmNumero = resultado
            let resultadoFormatado = resultadoEmNumero.toFixed(2);
            let resultadoFinal = document.getElementById("tela");
            resultadoFinal.innerText = resultadoFormatado
        }
    }
    // Caso o último caractere seja um oprador, ele será apagado.
    else {
        let tela = document.getElementById("tela");
        tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
    }
};