class Perro {
    constructor (name){
        this.name = name;
    }
    ladrar (){
        console.log(`¡Woof! ${this.name}`);
    }
}

class CuentaBancaria{
    constructor(titular){
        this.saldo = 0;
        this.titular = titular;
    }
    depositar(cantidad){
        this.saldo += cantidad ;
        return console.log(`Hola ${this.titular} su saldo actual despues de depositar $${cantidad} es de : $${this.saldo}`);
    }
    retirar (cantidad){
        this.saldo -= cantidad;
        return console.log(`Hola ${this.titular} su saldo actual despues de retirar $${cantidad} es de : $${this.saldo}`);
    }
}
export function Point1() {
    const miPerro = new Perro("Jefferson");
    miPerro.ladrar();
}




export function Point3() {
    const micuenta = new CuentaBancaria ("Jefferson");
    micuenta.depositar(100)
    micuenta.retirar(50)
}