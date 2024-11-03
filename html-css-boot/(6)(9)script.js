document.getElementById("equacaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const a = parseFloat(document.getElementById("coefA").value);
    const b = parseFloat(document.getElementById("coefB").value);
    const c = parseFloat(document.getElementById("coefC").value);
    const resultadoTexto = document.getElementById("resultadoTexto");

    
    if (a === 0 && b === 0 && c === 0) {
        resultadoTexto.textContent = "Igualdade confirmada: 0 = 0";
    } else if (a === 0 && b === 0 && c !== 0) {
        resultadoTexto.textContent = "Coeficientes informados incorretamente";
    } else if (a === 0) {
        resultadoTexto.textContent = `Esta é uma equação de primeiro grau: x = ${-c / b}`;
    } else {
        const delta = b ** 2 - 4 * a * c;
        resultadoTexto.textContent = "Esta é uma equação de segundo grau";

        if (delta < 0) {
            resultadoTexto.textContent += `. Esta equação não possui raízes reais (delta < 0): delta = ${delta}`;
        } else if (delta === 0) {
            const x = -b / (2 * a);
            resultadoTexto.textContent += `. Esta equação possui duas raízes reais iguais: x' = x'' = ${x}`;
        } else {
            const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
            const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
            resultadoTexto.textContent += `. Esta equação possui duas raízes reais diferentes: delta = ${delta}, x' = ${raiz1.toFixed(2)}, x'' = ${raiz2.toFixed(2)}`;
        }
    }
});
