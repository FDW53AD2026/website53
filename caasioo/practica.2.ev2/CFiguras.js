const figura = document.getElementById("figura");
const caracter = document.getElementById("caracter");
const grupoBase = document.getElementById("grupoBase");
const base = document.getElementById("base");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

// Al cambiar de figura, se muestran u ocultan las cajas de texto adecuadas
function actualizarCampos() {
  grupoBase.classList.toggle("oculto", figura.value !== "rectangulo");
  resultado.textContent = "";
  error.textContent = "";
}

function mostrar() {
  const c = caracter.value;
  const h = parseInt(altura.value, 10);
  const b = parseInt(base.value, 10);

  if (c.trim() === "") {
    error.textContent = "Escribe un carácter para dibujar la figura.";
    resultado.textContent = "";
    return;
  }
  if (isNaN(h) || h < 1) {
    error.textContent = "Ingresa una altura entera mayor a 0.";
    resultado.textContent = "";
    return;
  }
  if (figura.value === "rectangulo" && (isNaN(b) || b < 1)) {
    error.textContent = "Ingresa una base entera mayor a 0.";
    resultado.textContent = "";
    return;
  }
  error.textContent = "";

  let dibujo = "";
  if (figura.value === "triangulo") {
    for (let i = 1; i <= h; i++) dibujo += c.repeat(i) + "\n";
  } else {
    for (let i = 0; i < h; i++) dibujo += c.repeat(b) + "\n";
  }
  resultado.textContent = dibujo;
}

figura.addEventListener("change", actualizarCampos);
document.getElementById("mostrar").addEventListener("click", mostrar);
actualizarCampos();
