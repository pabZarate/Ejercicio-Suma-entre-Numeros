/* • Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */

/*function suma_entre_numeros(entero1: number, entero2: number) {
  let suma: number = 0;
  for (let i: number = entero1; i <= entero2; i++) {
    suma += i;
  }
  return suma;
}
let numero_1: number = Number(prompt("Ingrese el primer numero"));
let numero_2: number = Number(prompt("Ingrese el segundo numero"));
console.log("La suma es ", suma_entre_numeros(numero_1, numero_2));
*/

let numero_1: number = Number(prompt("Ingrese el primer numero"));
let numero_2: number = Number(prompt("Ingrese el segundo numero"));
let actual, suma: number;
actual = numero_1;
suma = 0;
while (actual <= numero_2) {
  suma = suma + actual;
  actual++;
}
console.log("El resultado de la suma es:", suma);
