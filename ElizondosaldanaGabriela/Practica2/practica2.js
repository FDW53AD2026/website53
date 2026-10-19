const selectFigura = document.getElementById("figura");
const btnMostrar = document.getElementById("btnMostrar");
 
function cambiarFigura() {
  const figura = selectFigura.value;
  document.getElementById("divBase").style.display =
    figura === "rectangulo" ? "block" : "none";
  document.getElementById("resultado").textContent = "";
}
 
function mostrar() {
  const figura = selectFigura.value;
  const car = document.getElementById("caracter").value;
  const altura = parseInt(document.getElementById("altura").value);
  const base = parseInt(document.getElementById("base").value);
  let salida = "";
 
  if (!car || isNaN(altura) || altura < 1) {
    alert("Ingresa un carácter y una altura válida");
    return;
  }
 
  if (figura === "triangulo") {
    for (let i = 1; i <= altura; i++) {
      salida += car.repeat(i) + "\n";
    }
  } else {
    if (isNaN(base) || base < 1) {
      alert("Ingresa una base válida");
      return;
    }
    for (let i = 0; i < altura; i++) {
      salida += car.repeat(base) + "\n";
    }
  }
 
  document.getElementById("resultado").textContent = salida;
}
 
selectFigura.addEventListener("change", cambiarFigura);
btnMostrar.addEventListener("click", mostrar);