


import {Product, taxCalculation} from './07-import-export-EXPORT'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad' ,
        price: 150
    }
];

//Tax = 0.15;
const [total, tax] = taxCalculation({
    products: shoppingCart ,
    tax: 0.15});

console.log('Total', total);
console.log('Tax', tax);