function calcular(operador) {
    // Captura os valores dos inputs
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    // Verifica se os números se são válidos
    if (isNaN(n1) || isNaN(n2)) {
        resultado = "você não digitou nada";
    } else {
        // Faz a operação quando o botão é clicado
        switch (operador) {
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case '*':
                resultado = n1 * n2;
                break;
            case '/':
                // Verifica se a divisão é por zero
                resultado = n2 !== 0 ? (n1 / n2) : "Não pode divisão por zero";
                break;
            default:
                resultado = "Operador inválido.";
        }
    }

    // E aqui mostrar o resultado na tela mesmo
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}