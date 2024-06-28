
export function point_1() {
    let productos = { papa: 2000, arroz: 3000, lentejas: 6000 , aceites: 12000}
    for (let producto in productos){
        console.log(producto , ": ",productos[producto]);
    }
}


export function point_2() {
    let objetoVacio = {};
    console.log(objetoVacio);
    objetoVacio["uno"] = 1;
    objetoVacio["dos"] = 2;
    objetoVacio["tres"] = 3;
    console.log(objetoVacio);
}

export function point_3() {
    let o = {password: "admin30905", rol: "admin", edad: 20}
    console.log(o);
    o.password = "user_7833";
    o.rol = "user";
    o.edad = 34;
    console.log(o);
}

export function point_4() {
    let o = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50};
    for(let verificador in o){
        if (o[verificador] % 2 === 0){
            console.log("El numero :",o[verificador], " es par");
        }
    }
}

export function point_5() {
    let usuarios  =  { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };

    let contadorUsuariosHabilitados = 0 ;
    for (let clave in usuarios ){
        if (usuarios[clave] === "habilitado"){
            contadorUsuariosHabilitados++;
        }
    }
    
    console.log("El total de usuarios habilitados es de : ", contadorUsuariosHabilitados);
}


export function point_6() {
    let recorrido = { numeros: [45, 78, 22, 89, 8] };
    for(let i = 0; i < recorrido.numeros.length; i++ ){
        console.log(recorrido.numeros[i]);
    }
}

export function point_7() {
    let objeto =  { 3: "tres", 60: "sesenta", 10: "diez" };
    console.log(objeto);
    delete objeto[60];
    console.log(objeto);
}

export function point_8() {
    let personas =  {
        162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
        4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
        786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
        };
    
    for (let cedula in personas){
        let claveCedula = personas[cedula];
        
        for (let atributoPersona in claveCedula){
            console.log(atributoPersona, ": ",claveCedula[atributoPersona]);
        }
        console.log(`
    |------------------------|
        `);
    }
}