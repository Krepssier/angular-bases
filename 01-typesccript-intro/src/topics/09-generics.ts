


export function whatsMyType<T>(argument: T): T{
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);
const amINumber = whatsMyType<number>(100);

console.log(amIString.split(' '));
console.log(amIArray.join('-'));
console.log(amINumber.toFixed());




