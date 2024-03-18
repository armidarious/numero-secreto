let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);  
    //console.log(numeroSecreto);
    document.getElementById('reiniciar').removeAttribute('disabled');
    if (numeroDelUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
    } else{
        if (numeroDelUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');            
        } else{
            asignarTextoElemento('p','El número secreto es mayor');   
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}

function limpiarCaja(){
let valorCaja = document.querySelector('#valorUsuario');
valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    }
    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del # Secreto');
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
