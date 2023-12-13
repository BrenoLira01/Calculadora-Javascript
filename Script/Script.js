
        //pegando a tela
var tela = document.getElementById("tela");

        // Selecionar todos os botões menos o de resulatdo, tela, back(apagar caractere) e clean(limpar tela).
        var botoesNumericos = document.querySelectorAll(".button:not(#botaoResultado):not(#tela):not(#botaoBack):not(#botaoClean)");

        /* função escrever botões na tela.*/      
        botoesNumericos.forEach(function (button) {
            button.addEventListener("click", function () {

                if (tela.innerText.length < 12) { // O 'if (tela.innerText.length < 12)' não permite que ultrapasse 12 caracteres.
                    
                tela.innerText += button.innerText.trim(); /* O 'tela.innerText += button.innerText.trim();' vai escrever botões na tela.
                O 'trim' remove espaços em branco extras. */

                }
            });

        });

        //função limpar tela

        var limparTela = document.getElementById("botaoClean");

        limparTela.addEventListener("click", limpar);

        function limpar() {
            tela.innerText = ""
        };

        //função apagar um caractere

        var apagarNumero = document.getElementById("botaoBack");

        apagarNumero.addEventListener("click", apagar);

        function apagar() {
            tela.innerHTML= tela.innerHTML.substring(0, tela.innerHTML.length - 1); // vai apagar o ultimo carctere na tela.
        };
        
        //função calcular
        var calcularNumero = document.getElementById("botaoResultado");

        calcularNumero.addEventListener("click", calcular);

        function calcular() {
          var tela = document.getElementById("tela").innerHTML;
          document.getElementById("tela").innerHTML = eval(tela); // Vai escrever o resultado na tela. O 'eval' vai fazer a parte de calcular.
        };