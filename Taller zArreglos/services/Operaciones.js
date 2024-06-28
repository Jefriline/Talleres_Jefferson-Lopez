


export function NumeroMenor(arreglo) {
    let min = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < min) {
            min = arreglo[i]; 
        }
    }
    console.log(`El numeor menor de los elementos dle arreglo es : ${min}`);
}


export function PrimoArreglo(Arreglo) {
    let numerosPrimos = [];
    for (let i = 0; i < Arreglo.length; i++) {
        let num = Arreglo[i];
        let esPrimo = true;
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                esPrimo = false;
            }
        }
        if (esPrimo) {
            numerosPrimos.push(num);
        }
    }
    if (numerosPrimos.length === 0) {
        console.log("No hay numeros primos en su arreglo.");
    } else {
        console.log(`El arreglo [${Arreglo}] tiene los siguientes numeros primos: [${numerosPrimos}]`);
    }
}

