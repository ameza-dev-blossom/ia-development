const sayHello = (): string => "¡Hola Mundo!";

const addNumbers = (a: number, b: number): number => a + b;

const isEven = (num: number): boolean => num % 2 === 0;

const greetUser = (name: string): void => console.log("Hola, " + name + ". ¡Bienvenido!");

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const reverseString = (str: string): string => str.split("").reverse().join("");

const getCurrentDate = (): string => new Date().toLocaleDateString('en-CA');
