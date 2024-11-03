document.getElementById("vendasForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = '';

    if (valorPago < valorCompra) {
        resultDiv.innerHTML = `<div class="alert alert-danger">A quantia paga é insuficiente para realizar a compra!</div>`;
        return;
    }

    const troco = valorPago - valorCompra;
    resultDiv.innerHTML += `<h3>Troco: R$ ${troco.toFixed(2)}</h3>`;
    
    const notas = [50, 20, 10, 5, 2, 1];
    let trocoNotas = {};

    
    let restante = troco;
    for (let nota of notas) {
        const quantidade = Math.floor(restante / nota);
        if (quantidade > 0) {
            trocoNotas[nota] = quantidade;
            restante -= quantidade * nota;
        }
    }

    for (let nota in trocoNotas) {
        resultDiv.innerHTML += `<p>Notas de R$ ${nota},00: ${trocoNotas[nota]}</p>`;
    }
});
