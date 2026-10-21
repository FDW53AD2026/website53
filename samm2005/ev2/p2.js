const inputfig  = document.getElementById("figura");
const inputcara  = document.getElementById("caracter");
const inputalt  = document.getElementById("altura");
const inputbase  = document.getElementById("base");
const btnMos  = document.getElementById("mostrar");
const salida = document.getElementById("salida");
const cajaBase = document.getElementById("cajaBase");

/*busque en google que propiedad podia usar para esconder las cajas, es muy parecida a la de css 
y luego lo hice una funcion*/

function cambiarFigura() {
    if (inputfig.value == 1) {
        cajaBase.style.display = "none";
    } 
    else {
        cajaBase.style.display = "block";
    }
}
inputfig.addEventListener("change", cambiarFigura);

cambiarFigura();

btnMos.addEventListener("click", e => {
        e.preventDefault();
        let fig = inputfig.value;
        let cara = inputcara.value;
        let alt = parseInt(inputalt.value);
        let base = parseInt(inputbase.value);
        salida.innerHTML = " ";

        if(fig==1){
            for (let i = 1; i <= alt; i++) {
              let texto = "";

                for (let j = 1; j <= i; j++) {
                    texto += cara;
                 }
                const elemento = document.createElement("p");
                elemento.innerHTML = texto;
                salida.appendChild(elemento);
            }

        }
        if (fig == 2) {
        for (let i = 1; i <= alt; i++) {
            let texto = "";

            for (let j = 1; j <= base; j++) {
                texto += cara;
            }

            const elemento = document.createElement("p");
            elemento.innerHTML = texto;
            salida.appendChild(elemento);
        }
    }
});