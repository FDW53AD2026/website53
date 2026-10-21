const selectFigura = document.getElementById("figura");
const filaBase = document.getElementById("filaBase");
const resultado = document.getElementById("resultado");

// Muestra u oculta la caja de Base según la figura elegida
function actualizarCampos() {
    if (selectFigura.value === "rectangulo") {
        filaBase.style.display = "block";
    } else {
        filaBase.style.display = "none";
        document.getElementById("base").value = "";
    }
    resultado.textContent = "";
}

function mostrarFigura() {
    const figura = selectFigura.value;
    const caracter = document.getElementById("caracter").value.charAt(0);
    const altura = parseInt(document.getElementById("altura").value);
    const base = parseInt(document.getElementById("base").value);

    if (caracter === "") {
        alert("Escribe el carácter con el que se dibujará la figura.");
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        alert("Ingresa una altura válida (número mayor que 0).");
        return;
    }
    if (figura === "rectangulo" && (isNaN(base) || base <= 0)) {
        alert("Ingresa una base válida (número mayor que 0).");
        return;
    }

    let dibujo = "";

    if (figura === "triangulo") {
        for (let fila = 1; fila <= altura; fila++) {
            dibujo += caracter.repeat(fila) + "\n";
        }
    } else {
        for (let fila = 1; fila <= altura; fila++) {
            dibujo += caracter.repeat(base) + "\n";
        }
    }

    resultado.textContent = dibujo;
}

selectFigura.addEventListener("change", actualizarCampos);
document.getElementById("btnMostrar").addEventListener("click", mostrarFigura);