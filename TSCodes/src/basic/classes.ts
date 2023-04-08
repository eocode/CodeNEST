import axios from "axios";
import { Move, PokeapiResponse } from "../interface/pokeapi-response.interfase";

export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ){
        console.log('Pokemon creado');
    }

    get imageUrl(): string{
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }

    scream(): void{
        console.log(`My name is ${this.name.toUpperCase()}`);
        this.speak();
    }

    private speak(): void{
        console.log(`${this.name} ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
        
    }

}

export const charmander = new Pokemon(4, 'Charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');
console.log(charmander.getMoves());