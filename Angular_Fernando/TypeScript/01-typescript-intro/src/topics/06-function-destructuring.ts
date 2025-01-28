
// Interfaces
export interface Product {
    description: string;
    price: number;
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}
// Constantes
const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 399.9
}

// Funciones
// function taxCalculator( options:TaxCalculationOptions ): [number,number] {
export function taxCalculator(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

// Main del programa
const shoppingCart = [phone, tablet];
const tax = 0.21;

// Desectructuración result
const [total, taxTotal] = taxCalculator({
    products: shoppingCart,
    tax: tax,
})


console.log('Total: ', total);
console.log('Tax: ', taxTotal);
