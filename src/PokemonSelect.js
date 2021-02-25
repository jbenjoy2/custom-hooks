import React, { useState } from 'react';
import pokemonList from './pokemonList';
import { choice, formatPokemonCard } from './helpers';

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, hasPokemon, remove, pokemon = pokemonList }) {
	const [ pokeIdx, setPokeIdx ] = useState(0);
	const handleChange = (evt) => {
		setPokeIdx(evt.target.value);
	};

	return (
		<div>
			<select onChange={handleChange}>
				{pokemon.map((p, idx) => (
					<option key={idx} value={idx}>
						{p}
					</option>
				))}
			</select>
			<button onClick={() => add(formatPokemonCard, pokemon[pokeIdx])}>Catch one!</button>
			<button onClick={() => add(formatPokemonCard, choice(pokemon))}>I'm feeling lucky</button>
			{hasPokemon && <button onClick={remove}>Remove All Pokemon</button>}
		</div>
	);
}

export default PokemonSelect;
