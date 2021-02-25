import React from 'react';
import PlayingCard from './PlayingCard';
import { useAxios } from './hooks';
import { formatPlayingCard } from './helpers';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [ cards, addCard, removeCards ] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');
	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard(formatPlayingCard)}>Add a playing card!</button>
				{cards.length > 0 && <button onClick={removeCards}>Clear Table</button>}
			</div>
			<div className="PlayingCardList-card-area">
				{cards.map((cardData) => <PlayingCard key={cardData.id} front={cardData.image} />)}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
