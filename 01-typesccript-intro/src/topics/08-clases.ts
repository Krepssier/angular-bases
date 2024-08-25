

export class Person {
    constructor(
        public name: string, 
        private address: string = 'Sin dirección', 
        private lastName:string
    ) {}

    public get getAddress(): string{
        return this.address;
    }

    public get getLastName(): string{
        return this.lastName;
    }

    public set setLastName(lastName: string){
        this.lastName = lastName;
    }
}

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){ 
    }
}

const tony = new Person('Tony', 'Stark', 'New York' )
const ironman = new Hero('IronMan',45, 'Tony', tony);

console.log(ironman);


