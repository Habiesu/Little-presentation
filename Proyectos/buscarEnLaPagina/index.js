var input = document.getElementById('busqueda');
var parrafosArray = Array.from(document.getElementsByTagName('p'));
console.log(parrafosArray);


document.getElementById('busqueda').addEventListener('keyup', (a) => {
    verificarBusqueda()
});

function verificarBusqueda(){
    if(input.value.trim()){
        for (let i = 0; i < parrafosArray.length; i++) {
            let parrafo = parrafosArray[i].innerText.toLowerCase();
            let buscar = input.value.toLowerCase();
            if (parrafo.indexOf(buscar) != -1){
                // let indice = parrafo.indexOf(buscar);
                parrafosArray[i].innerHTML = parrafo.replace(buscar, `<span class="bg-red-900">${buscar}</span>`)
            }
            else{
                if(buscar == ""){
                    parrafosArray[i].innerHTML = parrafo.replace(buscar, )
                }
            }
        }   
    }
}

/*
Falta por terminar el que se cambien los spans por parrafos nuevamente.
*/