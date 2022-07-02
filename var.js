var numeroSecreto = parseInt(Math.random() * 11);

function Chutar(e) {
    e.preventDefault();
    console.log(e);

    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto){
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if ( chute < numeroSecreto) {
        elementoResultado.innerHTML = "O número Secreto é MAIOR do que o número selecionado"
    }  else if ( chute > numeroSecreto) {
        elementoResultado.innerHTML = "O número Secreto é MENOR do que o número selecionado"
    }
}