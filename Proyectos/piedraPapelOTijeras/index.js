var usuario = "";
var machine = "";
// Variable del historial
var historial = document.getElementById('history').innerHTML = [];
// Variables del scoreboard 
var victories = 0;
document.getElementById('player-victories').innerHTML=0;
var defeats = 0;
document.getElementById('machine-victories').innerHTML=0;
// Botones 
function opciones(caracter){
    machine = Math.floor(Math.random()*3);
    if (caracter === 'piedra'){
        usuario = 0;
        juego(usuario);
    }
    else if(caracter === 'papel'){
        usuario = 1;
        juego(usuario);
    }
    else{ // tijera
        usuario = 2;
        juego(usuario);
    }
}
// Lógica del juego
function juego(caracter){
    if ((usuario === 0 && machine === 2) || (usuario === 1 && machine === 0) || (usuario === 2 && machine === 1)){ // Primer caso
        victories += 1;
        document.getElementById('player-victories').innerHTML = victories;
        almacenarEnHistorial(' --- ¡GANASTE! --- ');
    }
    else if  (usuario === machine){// Segundo caso
        almacenarEnHistorial(' ---- ¡EMPATE! ---- ');
    }
    else{ // Tercer caso
        defeats += 1;
        document.getElementById('machine-victories').innerHTML = defeats;
        almacenarEnHistorial(' --- ¡PERDISTE! --- ');
    }

    function almacenarEnHistorial(result){
        function repetitivo(){
            let añadir = document.createElement('p');
            añadir.innerHTML = result;
            añadir.style = "color:black;font-size:1.2rem;display:flex;justify-content:center;color:black;font-weight:bold";
            document.getElementById('history').appendChild(añadir);
        }
        if (historial.length < 5){
            historial.push(result);
            repetitivo();
        }
        else{
            document.getElementById('history').removeChild(document.getElementById('history').firstChild);
            historial.push(result);
            repetitivo();
        }
    }   
}
