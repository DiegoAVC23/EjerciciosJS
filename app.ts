// const nombre: string = 'Carlos';
// Declarar sus tipos
const nombre: string = "John Doe";
const edad: number = 25;
console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
//arreglar el error
const numero: number = -5;

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero === 0) {
  console.log("El número es cero");
} else {
  console.log("El número es negativo");
}
const numeros:number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}