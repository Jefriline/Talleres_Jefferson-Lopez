

export function point3_1a4() {
    
    let array = [3, 50, 70, 600, 40];

    // 1. Usar forEach para recorrer el arreglo e imprimir todos sus elementos
    console.log(`-------Point3.1-------`);
    array.forEach(i => {
    console.log(i);
    });

    // 2. Usar forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
    console.log(`-------Point3.2-------`);
    array.forEach(j => {
    console.log(j * 3);
    });

    // 3. Usar while para recorrer el arreglo e imprimir todos sus elementos
    console.log(`-------Point3.3-------`);
    let h = 0;
    while (h < array.length) {
    console.log(array[h]);
    h++;
    }

    // 4. Usar for, condicional y operación módulo para recorrer el arreglo y mostrar cuáles elementos son pares
    console.log(`-------Point3.4-------`);
    for (let k = 0; k < array.length; k++) {
    if (array[k] % 2 === 0) {
        console.log(array[k]);
    }
    }
}

export function point3_5() {
    console.log(`-------Point3.5-------`);
    // 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo
    let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
    let nombreBuscar = "Juan"
    let verificador = 0;
    for (let i = 0 ; i< arreglo.length;i++){
        if (arreglo[i] == nombreBuscar){
            verificador++;
        }
    }
    if (verificador !== 0){
        console.log("El nombre Juan si se encuentra");
    }else {
        console.log("El nombre Juan no se encuentra");
    }
}

export function point3_6() {
    console.log(`-------Point3.6-------`);
    // 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria
    let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
    let nombreBuscar = "Maria"
    let contador = 0;
    for (let i = 0 ; i< arreglo.length;i++){
        if (arreglo[i] == nombreBuscar){
            contador++;
        }
    }
    console.log(`El nombre ${nombreBuscar} se encuentra un total de ${contador} veces`);
   
}

export function point3_7() {
    console.log(`-------Point3.7-------`);
    //7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora
    let arreglo = [15, 7, 9, 12, 1];
    let acumulador = 0;
    arreglo.forEach(i => {
        acumulador+=i;
    })
    console.log(`La suma total de los elementos del arreglo es de = ${acumulador}`);
}

export function point3_8() {
    console.log(`-------Point3.8-------`);
    //8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma delos cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la variable contadora
    let arreglo = [-2, 8, 99, 1, 7];
    let acumulador = 0;
    arreglo.forEach(i => {
        acumulador+=i**2;
    })
    console.log(`La suma total de los cuadrados de los elementos del arreglo es de = ${acumulador}`);
    
}

export function point3_9() {
    console.log(`-------Point3.9-------`);
    // . Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora.  
    let arreglo = [true, true, false, true, false, false];
    let i = 0 ; 
    let contador = 0;
    while (i<arreglo.length){
        if (arreglo[i] === false){
            contador++;
        }
        i++;
    }
    console.log(`La cantidad de veces qeu aparece el elemento [false] en el arreglo es de ${contador} veces`);
}

export function point3_10() {
    console.log(`-------Point3.10-------`);
    //10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso.
    let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
    let a = 0;
    let d = 0;
    let s = 0;
    let o = 0;

    for (let i = 0; i<arreglo.length;i++){
        if (arreglo[i] == "a"){
            a++;
        }else if (arreglo[i] == "d"){
            d++;
        }else if (arreglo[i] == "s"){
            s++;
        }else if (arreglo[i] == "o"){
            o++;
        }
    }
    if (a > 0 && d > 0 && s > 0 && o > 0){
        console.log("Si es posible formar la palabra [adso] con los elementos del arreglo");
    }else{
        console.log("No es posible formar la palabra [adso] con los elementos del arreglo");
    }
}

export function point3_11() {
    console.log(`-------Point3.11-------`);
    // 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...)
    let arreglo = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 0; i < arreglo.length; i++){
        console.log(`5 x ${arreglo[i]} = ${arreglo[i] * 5}`);
    }
}

export function point3_12() {
    console.log(`-------Point3.12-------`);
    //12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos for(una dentro del otro) para determinar cuáles números con consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.
    let arreglo = [5, 7, 90, 2, 5, 3, 8, 99];
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
          if (arreglo[i] + 1 === arreglo[j] || arreglo[i] - 1 === arreglo[j]) {
            console.log(`Se encontro numeros consecutivos. ${arreglo[i]} y ${arreglo[j]}`);
          }
        }
    }
}