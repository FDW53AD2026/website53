const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const output = document.getElementById("result");
const campoBase = document.getElementById("campoBase");
const btnMostrar = document.getElementById("btnMostrar");


inputFigura.addEventListener('change', function(){
    if(inputFigura.value=="2"){
        campoBase.style.display="block"
    }else{
        campoBase.style.display="none";
    }

});

btnMostrar.addEventListener('click', ()=>{
    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura =parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);

    let dibujo="";

    if(caracter==""){
        alert("escribe un caracter");
        return;
    }
    if (isNaN(altura)|| altura<1) {
        alert("escribe una altura valida");
        return;
        
    }

    if(figura=='1'){
        for(let i = 1; i<= altura;i++){
            dibujo+=caracter.repeat(i)+"\n";
        }
    } else if ( figura=='2'){
        if(isNaN(base)||base<1){
            alert("escribe una base valida");
            return;
        }
        for (let i = 0; i < altura; i++) {
            dibujo+=caracter.repeat(base)+"\n";
            
        }
    }
    output.textContent=dibujo;

});




