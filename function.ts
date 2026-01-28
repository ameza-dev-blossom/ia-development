/**
 * 7 Funciones Dummy convertidas a TypeScript
 */

// 1. Saludo simple
export const sayHello = (): string => "¡Hola Mundo!";

// 2. Suma de dos números
export const addNumbers = (a: number, b: number): number => a + b;

// 3. Verificar si un número es par
export const isEven = (number: number): boolean => number % 2 === 0;

// 4. Saludar a un usuario por nombre
export const greetUser = (name: string): void => console.log(`Hola, ${name}. ¡Bienvenido!`);

// 5. Generar un número entero aleatorio entre un rango
export const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// 6. Revertir una cadena de texto
export const reverseString = (str: string): string => str.split("").reverse().join("");

// 7. Obtener la fecha actual formateada (YYYY-MM-DD)
export const getCurrentDate = (): string => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const year = d.getFullYear();

    return `${year}-${month}-${day}`;
};
