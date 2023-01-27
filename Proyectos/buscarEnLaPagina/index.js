var input = document.getElementById('busqueda');
var parrafosArray = Array.from(document.getElementsByTagName('p'));
let parrafosOriginales = [];

document.getElementById('busqueda').addEventListener('keyup', (a) => {
    verificarBusqueda()
});

function verificarBusqueda(){
    if(input.value.trim()){
        for (let i = 0; i < parrafosArray.length; i++) {
            if(!parrafosOriginales[i]){
                parrafosOriginales[i] = parrafosArray[i].innerText;
            }
            let buscar = input.value;
            if (parrafosOriginales[i].indexOf(buscar) != -1){
                parrafosArray[i].innerHTML = parrafosOriginales[i].replace(new RegExp(buscar, "g"), `<span class="bg-red-900 text-white">${buscar}</span>`);
            } 
        }   
    }else{
        for (let i = 0; i < parrafosArray.length; i++) {
            parrafosArray[i].innerHTML = parrafosOriginales[i];
        }
    }
}

/* Tristemente tuve ayuda de chatgpt para terminar la parte lógica de eliminar los elementos span, yo ya tenía la idea de almacenarlos en una variable pero no sabía o no llegué al resultado que era usando:

else{
        for (let i = 0; i < parrafosArray.length; i++) {
            parrafosArray[i].innerHTML = parrafosOriginales[i];
        }
    }

*/