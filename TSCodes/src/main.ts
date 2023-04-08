import './style.css'
import {name} from './basic/types';
import {pokemonIds, bulbasaur, pokemons} from './basic/objects';
import { setupCounter } from './counter'
import { charmander } from './basic/injection'
import { charmander2 } from './basic/decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Test</h1>
    <p>${name}</p>
    <p>${pokemonIds}</p>
    <p>${bulbasaur.name}</p>
    <p>${pokemons}</p>
    <p>${charmander.name}</p>
    <p>${charmander2.name}</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
