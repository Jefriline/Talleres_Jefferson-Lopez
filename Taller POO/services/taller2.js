
class Empleado {
    constructor(salario){
        this.salarioPersona = salario ;
    }
    get salario(){
        return this.salarioPersona;
    }
    set salario(nuevoSalario){
        if (nuevoSalario >= 0 ){
            this.salarioPersona = nuevoSalario;
        }else{
            console.log(`Numero no permitido`);
        }
    }
}

class Cuadrado{
    constructor(lado){
        this.longitudLado = lado;
    }
    get lado(){
        return this.longitudLado;
    }
    set lado(nuevoValor){
        this.longitudLado = nuevoValor;
    }
    calcularArea(){
        let areaCuadrado = this.longitudLado**2;
        return console.log(`El area del cuadrado cuyo lados mide ${this.longitudLado}cm es igual a ${areaCuadrado}cm2`);
    }
}

class UsuariosActivos{
    constructor(){
        this.Usuarios = [];
    }
    get usuarios(){
        return this.Usuarios;
    }
    set usuarios(NuevoArreglo){
        this.Usuarios = NuevoArreglo;
    }
    AgregarUsuarios(usuarioAgregar){
        return this.usuarios.push(usuarioAgregar);
    }
}

export function Point2_1() {
    const myEmpleado = new Empleado(5);
    console.log(myEmpleado.salario);
    myEmpleado.salario = 2;
    console.log(myEmpleado.salario);
}

export function point2_2() {
    const myCuadrado = new Cuadrado(24);
    console.log(myCuadrado.lado);
    myCuadrado.lado = 29 ;
    console.log(myCuadrado.lado);
    myCuadrado.calcularArea();
}

export function point2_3(){
    const myUsuarios = new UsuariosActivos();
    myUsuarios.AgregarUsuarios("Jefferson")
    myUsuarios.AgregarUsuarios("Fernando")
    console.log(myUsuarios.usuarios);
    myUsuarios.usuarios = ["Pepito", "Pablito"]
    console.log(myUsuarios.usuarios);

}