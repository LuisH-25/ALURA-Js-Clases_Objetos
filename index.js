/*importacion de clases*/
import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12345678";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "1212121212";
// cuentaCorriente1.#saldo = 0;

const cuentaDeLeonardo = new CuentaCorriente();
let saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es: ", saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(1000);
console.log("El saldo actual es: ", saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log("El saldo actual es: ", saldo);



const cuentaCorriente2 = new CuentaCorriente();
console.log(cuentaCorriente2);