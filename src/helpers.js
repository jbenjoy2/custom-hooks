/* Select a random element from values array. */
import { v4 as uuid } from 'uuid';

function choice(values) {
	const randIdx = Math.floor(Math.random() * values.length);
	return values[randIdx];
}

// format playing card data to receive only necessary info
function formatPlayingCard(data) {
	return {
		image : data.cards[0].image,
		id    : uuid()
	};
}

// format pokemon card data to receive only necessary info
function formatPokemonCard(data) {
	return {
		front : data.sprites.front_default,
		back  : data.sprites.back_default,
		name  : data.name,
		stats : data.stats.map((stat) => ({
			value : stat.base_stat,
			name  : stat.stat.name
		})),
		id    : uuid()
	};
}

export { choice, formatPlayingCard, formatPokemonCard };
