
const figura = document.getElementById("figura");
const campoBase = document.getElementById("campoBase");
const boton = document.getElementById("mostrar");
const resultado = document.getElementById("resultado");

figura.addEventListener("change", function() {
    if (figura.value === "rectangulo") {
        campoBase.style.display = "block";
    } else {
        campoBase.style.display = "none";
    }
});

boton.addEventListener("click", function() {
    const caracter = document.getElementById("caracter").value;
    const altura = Number(document.getElementById("altura").value);
    const base = Number(document.getElementById("base").value);

    if (caracter === "" || !Number.isInteger(altura) || altura < 1 ||
        (figura.value === "rectangulo" && (!Number.isInteger(base) || base < 1))) {
        resultado.textContent = "Ingresa datos validos.";
        return;
    }

    let dibujo = "";

    if (figura.value === "triangulo") {
        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(i) + "\n";
        }
    } else {
        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(base) + "\n";
        }
    }

    resultado.textContent = dibujo;
});
