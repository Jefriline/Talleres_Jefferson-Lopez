import { ContadorElements } from "../Punto1/funciones/recorridoArray.js";
import { contadorConcidencia } from "./funciones/find.js";

export function point2_1() {
   // 1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length 
   // a) [1,2,3,4,5,6,7,8,9,10] 
   // b) [] 
   // c) ["a", true, -1] 
   // d) [2, 4, 5, 7, 1, 34, 89, 0]
    console.log(`-------Point2.1-------
      `);
    const arregloA = [1,2,3,4,5,6,7,8,9,10] ;
    const ArregloB = [];
    const arregloC = ["a", true, -1];
    const ArregloD =  [2, 4, 5, 7, 1, 34, 89, 0];
    console.log(`El array A tiene un total de : `, ContadorElements(arregloA),` elementos`);

    console.log(`El array B tiene un total de : `, ContadorElements(ArregloB),` elementos`);

    console.log(`El array C tiene un total de : `, ContadorElements(arregloC),` elementos`);

    console.log(`El array D tiene un total de : `, ContadorElements(ArregloD),` elementos`);

}

export function point2_2() {
  console.log(`-------Point2.2-------`);
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // a) Agregar el elemento 345 usando push y verificar el cambio en el arreglo
  console.log(array);
  array.push(345);
  console.log(array); 

  // b) Agregar el elemento true usando push y verificar el cambio en el arreglo
  array.push(true);
  console.log(array);
  
  // c) Agregar el elemento "ADSO" usando push y verificar el cambio en el arreglo
  array.push("ADSO");
  console.log(array);
  
  // d) Agregar los elementos 455, 78, false usando push en un solo llamado y verificar el cambio en el arreglo
  array.push(455, 78, false);
  console.log(array);
  
  // e) Agregar los elementos "ABcd", true, 21 usando push en un solo llamado y verificar el cambio en el arreglo
  array.push("ABcd", true, 21);
  console.log(array); 
  
}

export function point2_3() {
  console.log(`-------Point2.3-------`);
  // a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
  let array1 = [1, 2, false];
  console.log(array1);
  array1.splice(2, 1); 
  console.log(array1); 

  // b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
  let array2 = [99, false, 17, 45, 7, "abc", 78];
  console.log(array2);
  array2.splice(6, 1); 
  console.log(array2); 

  // c) Dado el arreglo [-1, -55, -89, 30, 1000] Elimine el elemento de índice 1
  let array3 = [-1, -55, -89, 30, 1000];
  console.log(array3);
  array3.splice(1, 1); 
  console.log(array3); 

  // d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un sólo llamado
  let array4 = ["zxc", 767, 1298, true, false, [3], 1];
  console.log(array4);
  array4.splice(1, 4); 
  console.log(array4); 

  // e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado
  let array5 = [34, ["q"], 67, 1, 99, 1/2];
  console.log(array5);
  array5.splice(3, 2); 
  console.log(array5); 

};

export function point2_4() {
  console.log(`-------Point2.4-------`);
  //4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a
  let ArreOriginal = [2, 6, 9, 0, 5];
  let ArreCopia = ArreOriginal;
  console.log(ArreOriginal);
  console.log(ArreCopia);
}

export function point2_5(){
  console.log(`-------Point2.5-------`);
  // 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b
  let ArreOrignal = ["abc", 4, 88, 99];
  let ArreCopia = ArreOrignal.slice();
  console.log(ArreOrignal);
  console.log(ArreCopia);
};

export function point2_6() {
  console.log(`-------Point2.6-------`);
  //6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos
  let arreglo = ["x", "y", "z", 0, 1, 2, 3];
  for (let i = 0 ; i < arreglo.length ;i++){
    console.log(arreglo[i]);
  }
}

export function point2_7() {
  console.log(`-------Point2.7-------`);
  // 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1
  let arreglo = [1, 17, 8, 9, 3];
  for (let i = 0 ; i < arreglo.length ;i++){
    console.log(arreglo[i]+1);
  }
}

export function point2_8() {
  console.log(`-------Point2.8-------`);
  // 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
  const arregloPrueba = [1,2,3,4,5,6,7,8,9,10] ;
  console.log(`El array tiene un total de : `, ContadorElements(arregloPrueba),` elementos`);
}

export function point2_9() {
  console.log(`-------Point2.9-------`);
  // 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
  let arrayPrueba = ["a", "b", "c", "d", "e", "f", "g"];
  let letraPrueba = "a"
  console.log(`Se encontro ${contadorConcidencia(letraPrueba,arrayPrueba)} elementos que conciden con la letra [${letraPrueba}] dentro del array`);
}

