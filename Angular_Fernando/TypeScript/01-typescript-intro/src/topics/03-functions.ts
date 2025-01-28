
function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}
// const result: number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);

// console.log({result,result2,multiplyResult})

interface Character {
    name: string;
    pv: number;
    showPv: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    if (character.pv < 100) {
        character.pv += amount;
    }
}

const aragorn: Character = {
    name: 'Aragorn',
    pv: 50,
    showPv() {
        console.log(`${this.name} tiene: ${this.pv} puntos de vida `);
    }
}

aragorn.showPv();
healCharacter(aragorn, 10);
aragorn.showPv();

export { };