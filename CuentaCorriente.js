export class CuentaCorriente
{
  cliente;
  numero;
  agencia;
  #saldo;       //Atributo como privado

  constructor(){
    this.cliente = null;  //Es un obj de tipo cliente
    this.numero = "";
    this.agencia = "";
    this.#saldo = 0;
  }

  depositoEnCuenta(valor){
    if (valor>0){
      this.#saldo += valor;
      return this.#saldo;
    }
  }
  
  retirarDeCuenta(valor){
    if(valor <=this.#saldo){
      this.#saldo -= valor; 
      return this.#saldo;
    }
  }
  verSaldo(){
    return this.#saldo;
  }
  transferirParaCuenta(valor, cuentaDestino){
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}