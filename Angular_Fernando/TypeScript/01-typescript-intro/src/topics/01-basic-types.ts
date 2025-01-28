const constante: string = 'Constante';
let name = 'Antonio';
let hpPoints: number | string = 95; // la tuvería | vale para añadir varios tipos a la variable 
let hpPrueba: number | 'FULL' = 95; // También sirve para meterle valores concretos
const isAlive: boolean = true;

//hpPrueba = 'COMPLETO';  Type '"COMPLETO"' is not assignable to type 'number | "FULL"'.
hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
})


export {};