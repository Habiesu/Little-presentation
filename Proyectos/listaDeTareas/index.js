var lista  = [];
var ul = document.getElementById('tareas-container');
var contador = 0;

// Cuando presionas la tecla "Enter" en el input
document.getElementById('input').addEventListener('keyup', (iterador) => {
    if (iterador.keyCode === 13){
        document.getElementById("boton").click();
    }
});
// Cuando haces click en el botón
document.getElementById('boton').onclick = ()=>{
    var valorDelInput = document.getElementById('input');
    let verificarEspacioVacio = valorDelInput.value.trim();
    if(verificarEspacioVacio){   
        if (lista.length<10){
        //Creando los elementos en el html y dandoles algúnos estilos y parámetros
            let li = '<li class="text-[12px] md:text-[15px] lg:text-[18px] w-[280px] md:w-[400px] truncate text-start">'+ valorDelInput.value +'</li>';
            let img = `<button onclick="verificar('tarea-container-${contador}', ${contador});"><img src="ico/check.png" alt="" class="w-[22px] cursor-pointer"></button>`
            let img2 = `<button onclick="borrar('tarea-container-${contador}');"><img src="ico/x_icon_152489.png" alt="" class="w-[18px] cursor-pointer"></button>`
            let imgContainer = `<div class="flex gap-2 items-center absolute right-[1rem]">${img+img2}</div>`
            let container = `<div id="tarea-container-${contador}" class="mostrar flex justify-between relative py-4 items-center border-b-[1px] border-t-[1px]">${li + imgContainer}</div>`
            ul.innerHTML += (container);
            // Creando un objeto, añadiendolo a la lista y sumandole 1 a la variable contador
            let object = {
                name: valorDelInput.value,
                completed: false,
                id: contador
            };
            document.getElementById('input').value = "";
            lista.push(object);
            contador++;
        }
        else{alert('No puedes añadir más de 10 tareas, por favor elimine una o compre la version PREMIUM para acceder a esta y más caracterísitcas únicas.')}
    }
    else{alert('No puede añadir una tarea vacía')}
};

function borrar(id){
    let div = document.getElementById(id);
    let temp = document.getElementById(id).firstChild.innerHTML;
        for(const element in lista){ 
            if (temp == lista[element].name){
                lista.splice(element,1);
                div.remove();
                break
            }
        }   
}

function verificar(contenedor, counter){
    for (const element in lista){
        let temp = document.getElementById(contenedor).firstChild;
        let listCompleted = lista[element].completed;
        let listId = lista[element].id;
        if(listId == counter){
            if (listCompleted == false){
                temp.style.textDecoration = "line-through";
                lista[element].completed = true;
            }
            else{
                temp.style.textDecoration = "none";
                lista[element].completed = false;
            }
        }
    }
}