const figura = document.getElementById("figura");
const caracter = document.getElementById("caracter");
const altura = document.getElementById("altura");
const base = document.getElementById("base");

const campoBase = document.getElementById("campoBase");
const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

figura.addEventListener("change", function () {

    if (figura.value === "triangulo") {
        campoBase.hidden = true;
    } else {
        campoBase.hidden = false;
    }

    resultado.textContent = "";
});

btnMostrar.addEventListener("click", function () {

    const simbolo = caracter.value;
    const h = Number(altura.value);
    const b = Number(base.value);

    if (simbolo.length !== 1 || simbolo.trim() === "") {
        alert("Escribe un solo caracter.");
        return;
    }

    if (altura.value.trim() === "" ||
        !Number.isInteger(h) || h <= 0) {
        alert("Escribe una altura valida.");
        return;
    }

    let dibujo = "";

    if (figura.value === "triangulo") {

        for (let i = 1; i <= h; i++) {
            dibujo += simbolo.repeat(i) + "\n";
        }

    } else {

        if (base.value.trim() === "" ||
            !Number.isInteger(b) || b <= 0) {
            alert("Escribe una base valida.");
            return;
        }

        for (let i = 1; i <= h; i++) {
            dibujo += simbolo.repeat(b) + "\n";
        }
    }

    resultado.textContent = dibujo;
});