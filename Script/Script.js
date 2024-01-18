let tela = document.getElementById("tela");

// ESCREVER NUMÉROS NA TELA
let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
    button.addEventListener("click", function () {
        
        // Apaga o zero no começo da tela.
        if (tela.value === "0") {
            tela.value = ""
        }

        //  Tamanho máximo de 12 caracteres.
        if (tela.value.length < 12) {

        // Vai escrever botões na tela. O 'trim' remove espaços em branco extras.
            tela.value += button.innerText.trim();
        }
    });
});

// ESCREVER PONTO
let botaoPonto = document.querySelectorAll(".ponto");
botaoPonto.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Concatena o zero com ponto.
        if (tela.value === "0") {
            tela.value = tela.value += botao.innerText.trim();
        }

        // Verifica se já possui um ponto na tela.
        if(tela.value.includes(".")) {
            return;
        }
        tela.value += botao.innerText.trim();
    });
});

// ESCREVER BOTÕES DE OPERAÇÃO
let botoesOperando = document.querySelectorAll(".operando");
botoesOperando.forEach(function (botao) {
    botao.addEventListener("click", function () {

        // Concatena o zero com botão de operação.
        if (tela.value === "0") {
            return;
        }

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

// LIMPAR TELA
let limparTela = document.getElementById("botaoClean");
limparTela.addEventListener("click", limpar);

function limpar() {
    tela.value = "0"
};

// APAGAR UM CARACTERE
let apagarNumero = document.getElementById("botaoBack");
apagarNumero.addEventListener("click", apagar);

function apagar() {
    tela.value = tela.value.substring(0, tela.value.length - 1);

    if (tela.value === "") {
        tela.value = "0"
    }
};

// fUNÇÃO CALCULAR
let calcularNumero = document.getElementById("botaoResultado");
calcularNumero.addEventListener("click", calcular);

function calcular() {

    let tela = document.getElementById("tela").value;
    let ultimoCaractere = tela.slice(-1);
    let ultimoCaractereEOperador = "+-x/".includes(ultimoCaractere);

    // Troca o 'x' por '*'
    let novaString = tela.replace(/x/g, "*");

    // Se o último caractere NÃO for um operador o calculo será feito.
    if (!ultimoCaractereEOperador) {

        // A função new Function realizará o cálculo.
        let calcular = new Function('return ' + novaString);
        let resultado = calcular();
        document.getElementById("tela").value = resultado;

        // Converter resultado em uma string.
        let resultadoString = resultado.toString();

        // Se ele possui mais de 12 caracteres.
        if (resultadoString.length > 12){
            let resultadoEmNumero = resultado
            let resultadoFormatado = resultadoEmNumero.toFixed(2);
            //utilizamos .toFixed() para limitar o resultado a duas casas decimais.

            // Adicionar o resultado formatado a tela.
            let resultadoFinal = document.getElementById("tela");
            resultadoFinal.value = resultadoFormatado
        }
    }
    // Caso o último caractere seja um operador, ele será apagado.
    else {
        let tela = document.getElementById("tela");
        tela.value = tela.value.substring(0, tela.value.length - 1);
    }
};

// LINK GITHUB
let gitBotao = document.getElementsByClassName("github")[0];
gitBotao.addEventListener("click", goToLink);

function goToLink() {
    window.location.href = "https://github.com/BrenoLira01";
}

// LINK LINKEDIN
let linBotao = document.getElementsByClassName("linkedin")[0];
linBotao.addEventListener("click", goToLink2);

function goToLink2() {
    window.location.href = "https://br.linkedin.com/in/breno-lira-b1b0342a9?trk=people-guest_people_search-card";
}