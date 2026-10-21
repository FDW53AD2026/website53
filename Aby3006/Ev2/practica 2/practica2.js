const selectFigura = document.getElementById("figura");
const campoBase = document.getElementById("campoBase");
const btnMostrar = document.getElementById("btnMostrar");

selectFigura.addEventListener("change", () => {
  const figuraSeleccionada = selectFigura.value;

  if (figuraSeleccionada === "Rectangulo") {
    campoBase.style.display = "block";
  } else {
    campoBase.style.display = "none";
  }
});

btnMostrar.addEventListener("click", () => {
  const figura = selectFigura.value;
  const caracter = document.getElementById("caracter").value || "*";
  const altura = Number(document.getElementById("altura").value);
  const base = Number(document.getElementById("base").value);
  const resultado = document.getElementById("resultado");

  let dibujo = "";

  if (figura === "Triangulo") {
    for (let i = 1; i <= altura; i++) {
      dibujo = dibujo + caracter.repeat(i) + "\n";
    }
  } 
  else if (figura === "Rectangulo") {
    for (let i = 1; i <= altura; i++) {
      dibujo = dibujo + caracter.repeat(base) + "\n";
    }
  }

  resultado.textContent = dibujo;
});