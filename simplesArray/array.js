/**
 * exemplo de uso dos métodos avançados de array: map, filter e reduce.
 */

// array de números para os exemplos
const numeros = [1, 2, 3, 4, 5, 6];

// .map(): criei um novo array com o resultado da função aplicada a cada elemento.
// também dobrei cada valor do array.
const dobrados = numeros.map(num => num * 2);
// resultado: [2, 4, 6, 8, 10, 12]
console.log('Números originais:', numeros);
console.log('Números dobrados:', dobrados);

// .filter(): crieii um novo array apenas com os elementos que passam no teste.
// e filtrei apenas os números pares.
const pares = numeros.filter(num => num % 2 === 0);
// resultado: [2, 4, 6]
console.log('Números pares:', pares);

// .reduce(): reduzi o array a um único valor, acumulando o resultado.
// somei todos os elementos do array.
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// resultado: 21
console.log('Soma dos números:', soma);