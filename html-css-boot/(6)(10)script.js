document.getElementById("funcaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const x = parseFloat(document.getElementById("valorX").value);
    const resultadoTexto = document.getElementById("resultadoTexto");

    
    let resultado;
    if (x < -2) {
        resultado = 2 * x + 2;
    } else if (x >= -2 && x < 3) {
        resultado = 3;
    } else { // x >= 3
        resultado = -x;
    }

   
    resultadoTexto.textContent = `f(${x}) = ${resultado}`;
});
