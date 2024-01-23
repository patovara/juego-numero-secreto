let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'
let i = 1;

function consola (){
    alert(`Usted ha clicado el botón ${i} ${i == 1 ? 'vez' : 'veces'}`);
    console.log(`Usted ha clicado el botón ${i} ${i == 1 ? 'vez' : 'veces'}`);
    i++;
}

function alerta (){
    let nombreCiudadBr = prompt('Que ciudad de Brasil ha visitado?');
    alert(`Estuve en ${nombreCiudadBr} y me acorde de Ti... MAQUINOLAAA`);
    console.log(`Estuve en ${nombreCiudadBr} y me acorde de Ti... MAQUINOLAAA`);
}

function pronto (){
    alert('Yo amo JS');
    console.log('Yo amo Js');
}

function suma (){
    let num1 = parseInt(prompt('Ingresa un número para hacer una pequeña suma'));
    let num2 = parseInt(prompt('Ingresa otro número para hacer una pequeña suma'));

    let resultado = num1+num2;

    alert(`El resultado de sumar ${num1} + ${num2} es ${resultado}`);

}
    