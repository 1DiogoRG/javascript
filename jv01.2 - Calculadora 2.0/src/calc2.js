function clickNumber(num){
    let numero = document.getElementById('calc-result').innerHTML;
    document.getElementById('calc-result').innerHTML = numero + num;
}

function limpaCampo(){
    document.getElementById('calc-result').innerHTML = "";
}

function limpaNumber(){
    let resultado = document.getElementById('calc-result').innerHTML;
    document.getElementById('calc-result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcularResult(){
    let resultado = document.getElementById('calc-result').innerHTML;

    if (resultado){
        document.getElementById('calc-result').innerHTML = eval(resultado);
    } else {
        document.getElementById('calc-result').innerHTML = "ERRO!";
    }
}
