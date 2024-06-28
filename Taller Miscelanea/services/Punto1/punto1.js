import {UnidimensionalReco, ContadorElements, } from "./funciones/recorridoArray.js";
export function point1_1() {
  //1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de indice 2 y 4
  console.log(`-------Point1.1-------
    `);
  const j = [200, -100, 45, 78, 32];
  console.log(j[2], `-----`, j[4]);
}

export function point1_2() {
  console.log(`
    
-------Point1.2-------
    `);
  // 2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.
  const f = ["ab", "cd", "ef", "gh"];
  console.log(f[1], `-----`, f[3]);
}

export function point1_3() {
  console.log(`
    
-------Point1.3-------
    `);
  //3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la operacion de recorrido con foreach
  const aux = [10, true, "k200", 20.7];
  aux.forEach((i) => {
    console.log(i);
  });
}

export function point1_4() {
  console.log(`
    
-------Point1.4-------
    `);
  // 4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e imprimir los elementos que sean números impares

  const k = [17, 4, 64, 79, 109, 112];
  k.forEach((n) => {
    if (n % 2 != 0) {
      console.log(n);
    }
  });
}

export function point1_5() {
  console.log(`
    
-------Point1.5-------
    `);
  // 5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por true, cambiar el elemento de índice 3 por false
  let h = [true, true, false, true, false];
  console.log(`Arreglo antes de cambios `, h);
  h[2] = true;
  console.log(`Arreglo despues de cambiar el indice "2" por true `, h);
  h[3] = false;
  console.log(`Arreglo despues de cambiar el indice "3" por false `, h);
}

export function point1_6() {
  console.log(`
    
-------Point1.6-------
    `);
  // 6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar el elemento "qr" por 30
  let w = ["wc", "jp", "zx", "qr"];
  console.log(`Arreglo antes de cambios `, w);
  w[1] = true;
  console.log(`Arreglo despues de cambiar el elemento "jp" por "true"`, w);
  w[3] = 30;
  console.log(`Arreglo despues de cambiar el elemento "qr" por "30"`, w);
}

export function point1_7() {
  console.log(`
    
-------Point1.7-------
    `);
  // 7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra , imprimiendo cada uno de sus elementos.
  const array = [2, 5, 7, 9];
  UnidimensionalReco(array);
}

export function point1_8() {
  console.log(`
    
-------Point1.8-------
    `);
  // 8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del arreglo.
  const Arregloprueba = [2, 3, 42, 1, 445, "Danger", true, false];
  console.log("Su arreglo tiene un total de ",ContadorElements(Arregloprueba), " elementos");
}

export function point1_9() {
  console.log(`
    
-------Point1.9-------
    `);
  // 9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]
  const arrayse = [30, 44, 54, 89, 100];
  console.log(
    "El elemento ",
    44,
    " se encuentra en el indice ",
    arrayse.indexOf(44),
    " del array : ",
    arrayse,
    " \nEl elemento ",
    89,
    " se encuentra en el indice ",
    arrayse.indexOf(89),
    " del array : ",
    arrayse,
    " \nEl elemento ",
    70,
    " se encuentra en el indice ",
    arrayse.indexOf(70),
    " del array : ",
    arrayse
  );
}
