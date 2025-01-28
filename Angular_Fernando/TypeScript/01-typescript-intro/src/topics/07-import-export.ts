import { Product, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 399.9
    }
];

const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.21,
});

console.log('Total: ', total);
console.log('Tax: ', tax);