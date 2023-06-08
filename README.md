## Creando clases en JS

class cliente
{
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldoCuenta;
}
const cliente1 = new cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12345678";
cliente1.numeroCuenta = "1212121212";
cliente1.saldoCuenta = 1000;
console.log(cliente1);

## Link de la clase
https://ljcl79.medium.com/el-paradigma-de-la-programaci%C3%B3n-orientada-a-objetos-d8a662a79fb9

## atributos privados
#atributoPrivado: Solo disponible en metodos dentro de la clase.
No pueden ser sobreescritos fuera de la clase.                                                
## Crear el packaje.json
- Para poder utilizar las clases de forma modular, se necesita el archivo package.jon:
npm init
cuentasbancopopular
"enter"
Gestion de Cuentas Corrientes del Banco
"enter"
"enter"
"enter"
"enter"

Se agrego en package.json, al final
"type":"module"

Sea agrega export en el archivo Cliente.js y CuentaCorriente.js el export, para que se pueda utilizar en otros modulos.