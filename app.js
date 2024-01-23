let secretNum = 0;
let attepts = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function asignasecretNum() {
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento(){
    let userNum = parseInt(document.getElementById('userValue').value);

    if (userNum === secretNum){
        asignarTextoElemento('p', `Adivinaste el número secreto en  ${attepts} ${(attepts === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(userNum > secretNum){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        attepts++;
        limpiarJuego();
    }
}

function limpiarJuego(){
    document.getElementById('userValue').value='';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número entre el 1 y 10');
    secretNum = asignasecretNum();
    attepts = 1;
}

function newGame(){
    //    //limpiar caja
    limpiarJuego();
    //    indicar mensajes de inicio 
    //    generar el número aleatorio
    //    iniciar número de intentos
    condicionesIniciales();
    //    Desabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();