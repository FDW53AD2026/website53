
/* Referencias */
const inputFigura = document.getElementById("Figura");
const inputCaracter = document.getElementById("Caracter");
const inputAltura = document.getElementById("Altura");
const inputBase = document.getElementById("Base");
const divAltura = document.getElementById("divAltura");
const divBase = document.getElementById("divBase");
const outputResultado = document.getElementById("Resultado");
const btnMostrar = document.getElementById("btnMostrar");

function dibujo() {
    let figura = parseInt(inputFigura.value);
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let resultado = "";

    if (caracter == "") {
        alert("Escribe un caracter");
        return;
    }

    if (isNaN(altura) || altura < 1) {
        alert("Escribe una altura valida");
        return;
    }

    if (figura == 1) {
        for (let i = 1; i <= altura; i++) {
            resultado += " ".repeat(altura - i);
            resultado += (caracter + " ").repeat(i);
            resultado += "\n";
        }
    } else {
        if (isNaN(base) || base < 1) {
            alert("Escribe una base valida");
            return;
        }

        for (let i = 1; i <= altura; i++) {
            resultado += (caracter + " ").repeat(base);
            resultado += "\n";
        }
    }

    outputResultado.textContent = resultado;
}

/* Mostrar u ocultar campos */
inputFigura.addEventListener("change", e => {
    if (inputFigura.value == 1) {
        divAltura.style.display = "block";
        divBase.style.display = "none";
    } else {
        divAltura.style.display = "block";
        divBase.style.display = "block";
    }

    outputResultado.textContent = "";
});

/* Boton Mostrar */
btnMostrar.addEventListener("click", e => {
    e.preventDefault();
    dibujo();
});
