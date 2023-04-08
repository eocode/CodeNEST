import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from "../api/pokeApi.adapter";
import { Move, PokeapiResponse } from "../interfase/pokeapi-response.interfase";

export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
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
        
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0].move.name);
        return data.moves;
        
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFech = new PokeApiFetchAdapter();
export const charmander = new Pokemon(4, 'Charmander', pokeApiFech);
console.log(charmander.getMoves());