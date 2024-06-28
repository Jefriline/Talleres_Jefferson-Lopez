import { NumeroMenor, PrimoArreglo } from "./Operaciones.js";


export function Punto1(){
    console.log("-----PUNTO1-----");
    // 1. Dado el arreglo [1,2,3,4,5,6]:
    // a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
    // b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
    // c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
    // d) Calcular el promedio de todos los elementos del arreglo
    let arreglo = [1,2,3,4,5,6];
    // a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
    let i = 0;
    console.log("Iteracion con while:");
    while (i < arreglo.length) {
    console.log(arreglo[i]);
    i++;
    }

    // b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo "for" y mostrarlos en pantalla.
    console.log("Iteracion con for:");
    for (let j = 0; j < arreglo.length; j++) {
    console.log(arreglo[j]);
    }

    // c) Crear una copia del arreglo usando el ciclo "for" pero con todos los elementos incrementados en 1.
    let copiaArreglo = [];
    for (let k = 0; k < arreglo.length; k++) {
    copiaArreglo.push(arreglo[k] + 1);
    }
    console.log("Copia del arreglo incrementado en 1:");
    console.log(copiaArreglo);

    // d) Calcular el promedio de todos los elementos del arreglo.
    let suma = 0;
    for (let k = 0; k < arreglo.length; k++) {
    suma += arreglo[k];
    }
    let promedio = suma / arreglo.length;
    console.log("Promedio de los elementos del arreglo:");
    console.log(promedio);
}

export function Punto2() {
    console.log("-----PUNTO2-----");
    //2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
    // cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
    // (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
    // elementos del arreglo.
    let arreglo = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
    let A= "";
    let T= "";
    let C= "";
    let G= "";
    for (let i = 0; i< arreglo.length;i++){
        let cadena = arreglo[i];
        for (let j = 0; j < cadena.length; j++) {
            let base = cadena[j];
            if (base === 'A') {
                A += 'A';
            } else if (base === 'T') {
                T += 'T';
            } else if (base === 'C') {
                C += 'C';
            } else if (base === 'G') {
                G += 'G';
            }
        }
    }
    console.log(`Con el arreglo: [${arreglo}] se pueden formar:`);
    console.log(`Cadenas formadas solo por A: ${A}`);
    console.log(`Cadenas formadas solo por T: ${T}`);
    console.log(`Cadenas formadas solo por C: ${C}`);
    console.log(`Cadenas formadas solo por G: ${G}`);
}

export function Punto3() {
    console.log("-----PUNTO3-----");
    // 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los elementos del arreglo.
    let Pruebs = [5,9,2,4,1,6,8];
    NumeroMenor(Pruebs);
}

export function Punto4() {
    console.log("-----PUNTO4-----");
    // 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en él.
    let Prueba = [1,2,3,4,5,6,7,8,9,10];
    PrimoArreglo(Prueba);
}

export function Punto5() {
    console.log("-----PUNTO5-----");
    // 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad.
    let cantidadUsuarios = prompt('Ingrese la cantidad de usuarios que va a ingresar (en numero entero) : ');
    cantidadUsuarios = parseInt(cantidadUsuarios);
    let contadorMayoresEdad = 0;
    for (let i = 0; i < cantidadUsuarios; i++) {
        let nombre = prompt(`Ingrese el nombre del usuario ${i + 1}:`);
        let edad = prompt(`Ingrese la edad de ${nombre}:`);
        edad = parseInt(edad);
        if (edad >= 18) {
            contadorMayoresEdad++;
        }
    }
    console.log(`Hay un total de ${contadorMayoresEdad} usuarios mayores de edad`);
}

export function Punto6() {
    console.log("-----PUNTO6-----");
    // 6. Dado los arreglos valle = ["Cali", "Tulua", "Cartago", "Salento"] quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"]
    // Ordene los arreglos de tal manera que los elementos (ciudades) queden en el arreglo que les corresponde. Use ciclos.

    let valle = ["Cali", "Tulua", "Cartago", "Salento"];
    let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
    let valleBien = [];
    let quindioBien = [];

    for (let i = 0; i < valle.length; i++) {
        if (valle[i] === "Cali" || valle[i] === "Tulua" || valle[i] === "Cartago" || valle[i] === "Palmira") {
            valleBien.push(valle[i]);
        } else if (valle[i] === "Salento" || valle[i] === "Cordoba" || valle[i] === "Armenia" || valle[i] === "Circasia") {
            quindioBien.push(valle[i]);
        }
    }

    for (let i = 0; i < quindio.length; i++) {
        if (quindio[i] === "Cordoba" || quindio[i] === "Armenia" || quindio[i] === "Salento" || quindio[i] === "Circasia") {
            quindioBien.push(quindio[i]);
        } else if (quindio[i] === "Cali" || quindio[i] === "Tulua" || quindio[i] === "Cartago" || quindio[i] === "Palmira") {
            valleBien.push(quindio[i]);
        }
    }

    console.log(`Valle del cauca ordenado : ${valleBien}`);
    console.log(`Quindio ordenado : ${quindioBien}`);

}

export function Punto7() {
    console.log("-----PUNTO7-----");
    // 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y verduras) queden en el arreglo que les corresponde. Use ciclos.
    let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
    let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
    let frutas = [];
    let verduras = [];

    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i] === "Pera" || arreglo1[i] === "Limón" || arreglo1[i] === "Manzana" || arreglo1[i] === "Banano") {
            frutas.push(arreglo1[i]);
        } else if (arreglo1[i] === "Cebolla" || arreglo1[i] === "Pimentón" || arreglo1[i] === "Lechuga" || arreglo1[i] === "Perejíl") {
            verduras.push(arreglo1[i]);
        }
    }

    for (let i = 0; i < arreglo2.length; i++) {
        if (arreglo2[i] === "Manzana" || arreglo2[i] === "Banano" || arreglo2[i] === "Pera" || arreglo2[i] === "Limón") {
            frutas.push(arreglo2[i]);
        } else if (arreglo2[i] === "Lechuga" || arreglo2[i] === "Perejíl" || arreglo2[i] === "Cebolla" || arreglo2[i] === "Pimentón") {
            verduras.push(arreglo2[i]);
        }
    }

    console.log(`Arreglo de frutas: ${frutas}`);
    console.log(`Arreglo de verduras: ${verduras}`);
            
}