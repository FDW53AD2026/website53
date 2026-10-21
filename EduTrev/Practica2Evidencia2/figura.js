function actualizarCampos() {
    const figura = document.getElementById("figura").value;
    const divBase = document.getElementById("divBase");

    if (figura === "Rectangulo") {
        divBase.style.display = "block";
    } else {
        divBase.style.display = "none";
    }
}

function dibujarFigura() {
    const figura = document.getElementById("figura").value;
    const caracter = document.getElementById("caracter").value || "*";
    const altura = parseInt(document.getElementById("altura").value) || 1;
    const base = parseInt(document.getElementById("base").value) || 1;

    let resultadoHTML = "";

    if (figura === "Triangulo") {
        for (let i = 1; i <= altura; i++) {
            resultadoHTML += caracter.repeat(i) + "\n";
        }
    } else if (figura === "Rectangulo") {
        for (let i = 1; i <= altura; i++) {
            resultadoHTML += caracter.repeat(base) + "\n";
        }
    }

    document.getElementById("resultado").textContent = resultadoHTML;
} 
