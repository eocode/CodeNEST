export const pokemonIds = [1,20,30,34,66]
pokemonIds.push(+'1')
console.log(pokemonIds)

interface Pokemon{
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}


console.log(bulbasaur)