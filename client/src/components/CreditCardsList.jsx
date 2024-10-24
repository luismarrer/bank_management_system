import {useEffect, useState} from "react";
import {getAllCreditCards} from "../api/CreditCard_api";
import {ShowCreditCard} from "./Card";

export function CreditCardsList() {
	const [cards, setCards] = useState([]);

	useEffect(() =>
		{
			async function loadCreditCards()
			{
				const res = await getAllCreditCards();
				setCards(res.data);
			}
			loadCreditCards();
		}, []);
	return (
		<div>
			<h4>Credit Cards</h4>
			{cards.map((card) => (
				<ShowCreditCard key={card.id} card={card} />
			))}
		</div>
	);
}