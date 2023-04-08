class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){
        console.log('Pokemon creado');
    }

    scream(): void{
        console.log(`No quiero hablar`);
    }

    speak(): void{
        console.log(`No quiero, No quiero`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
       return NewPokemon
    }
}

@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){
        console.log('Pokemon creado');
    }

    scream(): void{
        console.log(`My name is ${this.name.toUpperCase()}`);
    }

    speak(): void{
        console.log(`${this.name} ${this.name}`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();