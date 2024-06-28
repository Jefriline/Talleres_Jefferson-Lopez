

export function UnidimensionalReco(Arreglo){
    let i = 0 ;
    while (i<Arreglo.length){
        console.log(Arreglo[i]);
        i++;
    }
};

export function ContadorElements(Arreglo) {
    let contador = 0 ;
    for (let i = 0 ;i < Arreglo.length;i++){
        contador++;
    }
    return contador;
}