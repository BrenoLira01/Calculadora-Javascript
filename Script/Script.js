let tela = document.getElementById("tela");

/* ESCREVER BOTÕES NUMÉRICOS NA TELA.*/
let botoesNumericos = document.querySelectorAll(".numero");
botoesNumericos.forEach(function (button) {
    button.addEventListener("click", function () {

        // Apaga o zero no começo da tela.
        if (tela.innerText === "0") {
            tela.innerText = ""
        }

        if (tela.innerText.length < 12) { //  Tamanho máximo de 12 caracteres.

            tela.innerText += button.innerText.trim(); /* Vai escrever botões na tela.
                O 'trim' remove espaços em branco extras. */

        }
    });
});

// ESCREVER BOTÕES DE OPERAÇÃO E VÍRGULA.
let botoesOperando = document.querySelectorAll(".operando, .virgula");
botoesOperando.forEach(function (botao) {
    botao.addEventListener("click", function () {

        if (tela.innerText === "0") { // Concatena o zero com botão de operação.
            tela.innerText = tela.innerText += botao.innerText.trim();
        }

        // Obtêm o  último caractere
        let ultimoCaractere = tela.innerText.slice(-1);

        // Verificar se ele é um operador.
        let ultimoCaractereEOperador = "+-x/.".includes(ultimoCaractere);

        if (!ultimoCaractereEOperador) {
            // Caso não seja, adicioma um operador.
            tela.innerText += botao.innerText.trim();
        }
        else {
            // permite substituir um operador por outro.
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

//APAGAR
let apagarNumero = document.getElementById("botaoBack");

apagarNumero.addEventListener("click", apagar);

function apagar() {
    tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1); // vai apagar o último caractere na tela.
    if (tela.innerText === "") { // Se a tela estiver vazia adicona um 0.
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

    const novaString = tela.replace(/x/g, "*");
    console.log(novaString); // Troca o x por * para o eval fazer o calculo.

    if (!ultimoCaractereEOperador) {
        document.getElementById("tela").innerHTML = eval(novaString);
        /* Se o último caractere NÃO for um operador o 'eval' vai fazer o calculo normalmente. */
    }
    else {
        let tela = document.getElementById("tela");
        tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
        /* Caso seja, ele será apagado, em seguida o eval fará o calculo. */

        document.getElementById("tela").innerHTML = eval(tela.innerHTML);
    }

};