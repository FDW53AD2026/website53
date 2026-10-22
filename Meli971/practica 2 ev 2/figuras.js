const figura = document.getElementById("figura");
const campoAltura = document.getElementById("campoAltura");
const campoBase = document.getElementById("campoBase");
const altura = document.getElementById("altura");
const base = document.getElementById("base");
const caracter = document.getElementById("caracter");
const resultado = document.getElementById("resultado");
const mostrar = document.getElementById("mostrar");

figura.addEventListener("change", function () {
    campoBase.hidden = figura.value !== "rectangulo";
    resultado.textContent = "";
});

mostrar.addEventListener("click", function () {
    const h = Number(altura.value);
    const b = Number(base.value);
    const c = caracter.value;

    if (!c.trim() || !Number.isInteger(h) || h < 1 || h > 50) {
        resultado.textContent = "Ingresa un carácter y una altura válida.";
        return;
    }

    let dibujo = "";

    if (figura.value === "triangulo") {
        for (let i = 1; i <= h; i++) {
            dibujo += c.repeat(i) + "\n";
        }
    } else {
        if (!Number.isInteger(b) || b < 1 || b > 50) {
            resultado.textContent = "Ingresa una base válida.";
            return;
        }

        for (let i = 1; i <= h; i++) {
            dibujo += c.repeat(b) + "\n";
        }
    }

    resultado.textContent = dibujo;
});