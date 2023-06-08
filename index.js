/*importacion de clases*/
import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente();
cliente1.nombreCliente = "Leonardo";
cliente1.dniCliente = "12345678";
cliente1.rutCliente = "111111";

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = "1212121212"
cuentaDeLeonardo.cliente = cliente1;

let saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo de leonardo incial es: " +saldoLeonardo);

cuentaDeLeonardo.depositoEnCuenta(500);
saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo de leonardo con deposito es: " +saldoLeonardo);

const cliente2 = new Cliente();
cliente2.nombreCliente = "MAria";
cliente2.dniCliente = "12345678";

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = "1212121212";
cuentaDeMaria.agencia = "agencia 2";
cuentaDeMaria.cliente = cliente2;

let saldoMAria = cuentaDeMaria.verSaldo();
console.log("El saldo de maria es: " +saldoMAria);

cuentaDeLeonardo.transferirParaCuenta(200,cuentaDeMaria);
saldoMAria = cuentaDeMaria.verSaldo();
saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo de leonardo es: " +saldoLeonardo);
console.log("El saldo de maria es: " +saldoMAria);


// const cuentaDeLeonardo = new CuentaCorriente();
// let saldo = cuentaDeLeonardo.verSaldo();
// console.log("El saldo actual es: ", saldo);

// saldo = cuentaDeLeonardo.depositoEnCuenta(1000);
// console.log("El saldo actual es: ", saldo);

// saldo = cuentaDeLeonardo.retirarDeCuenta(100);
// console.log("El saldo actual es: ", saldo);



// const cuentaCorriente2 = new CuentaCorriente();
// console.log(cuentaCorriente2);