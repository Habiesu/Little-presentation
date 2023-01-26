var input = document.getElementById('busqueda');
var parrafosArray = Array.from(document.getElementsByTagName('p'));

document.getElementById('busqueda').addEventListener('keyup', (a) => {
    verificarBusqueda()
});

function verificarBusqueda(){
    if(input.value.trim()){
        for (let i = 0; i < parrafosArray.length; i++) {
            let parrafo = parrafosArray[i].innerText;
            let buscar = input.value;
            if (parrafo.indexOf(buscar) != -1){
                    parrafosArray[i].innerHTML = parrafo.replace(buscar, `<span class="bg-red-900 text-white">${buscar}</span>`)
            }
        }   
    }
}

/*
Falta por terminar el que se cambien los spans por parrafos nuevamente.
*/