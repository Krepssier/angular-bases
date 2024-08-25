


export interface Passenger{
    name: string;
    children?: string[]; //Aquí hijo es opcional
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = ({children}: Passenger): number => {
    
    const howManyChildren = children!.length || 0;
    
    return howManyChildren;
}

console.log(passenger1);
console.log(passenger2);


