

export function contadorConcidencia(letra,array) {
    let contador = 0;
    for(let j = 0 ;j < array.length; j++){
        if (array[j] === letra){
            contador++;
        }
    }
    return contador; 
}