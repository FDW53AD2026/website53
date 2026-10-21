
const figura = document.getElementById("figura");
const campoBase = document.getElementById("campoBase");
const caracter = document.getElementById("caracter");
const altura = document.getElementById("altura");
const base = document.getElementById("base");
const resultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");

function cambiarFigura() {
    if (figura.value === "rectangulo") {
        campoBase.hidden = false;
    } else {
        campoBase.hidden = true;
    }

    resultado.textContent = "";
}

function mostrarFigura() {
    const simbolo = caracter.value;
    const alto = Number(altura.value);
    const ancho = Number(base.value);

    if (simbolo.length !== 1) {
        alert("Escribe un carácter para dibujar.");
        return;
    }

    if (!Number.isInteger(alto) || alto < 1 || alto > 50) {
        alert("La altura debe ser un número entre 1 y 50.");
        return;
    }

    if (
        figura.value === "rectangulo" &&
        (!Number.isInteger(ancho) || ancho < 1 || ancho > 50)
    ) {
        alert("La base debe ser un número entre 1 y 50.");
        return;
    }

    let dibujo = "";

    if (figura.value === "triangulo") {
        for (let i = 1; i <= alto; i++) {
            dibujo += simbolo.repeat(i) + "\n";
        }
    } else {
        for (let i = 1; i <= alto; i++) {
            dibujo += simbolo.repeat(ancho) + "\n";
        }
    }

    resultado.textContent = dibujo;
}

figura.addEventListener("change", cambiarFigura);
btnMostrar.addEventListener("click", mostrarFigura);
