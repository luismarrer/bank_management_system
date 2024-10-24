import {useEffect, useState} from "react";
import {getAllDebitCards} from "../api/DebitCard_api";
import {ShowDebitCard} from "./Card";

export function DebitCardsList() {
	const [cards, setCards] = useState([]);

	useEffect(() =>
		{
			async function loadDebitCards()
			{
				const res = await getAllDebitCards();
				setCards(res.data);
			}
			loadDebitCards();
		}, []);
	return (
		<div>
			<h4>Debit Cards</h4>
			{cards.map((card) => (
				<ShowDebitCard key={card.id} card={card} />
			))}
		</div>
	);
}