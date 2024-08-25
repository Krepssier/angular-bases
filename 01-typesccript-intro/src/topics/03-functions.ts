function addNumbers(){
};

function addNumbers2(){
    return undefined;
}

console.log(addNumbers);
console.log(addNumbers2);

// function addNumers3(a, b){
// }

function addNumbers4(a: any, b: any){
}

console.log(addNumbers4('a', 3));


function addNumbers5(a: number, b: number){
   return a + b;
}


const result: string = addNumbers5(3, 4).toString();

console.log(result);


// console.log(addNumbers5(20));

console.log(addNumbers5(20, 30));



function addNumbers6(a: number, b: number): number{
    return a + b;
 }
 console.log(addNumbers6(20, 30));

const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}
console.log(addNumbersArrow(7,8));


const addNumbersArrow2 = (a: number, b:number): string =>{
    return `${a + b}`;
}
console.log(addNumbersArrow2(7,8));


function multiply(firstNumber: number, secondNumber?: number, base:number = 2){
    return firstNumber;
}

const multiplyResult = multiply(5);
console.log(multiplyResult);



interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healthCharacter = (character: Character, amount: number) =>{
    character.hp += amount;
}

const strider: Character ={
    name: 'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healthCharacter(strider, 10);
strider.showHp();
healthCharacter(strider, 20);
strider.showHp();



