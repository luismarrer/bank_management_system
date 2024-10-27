import {useEffect, useState} from "react";
import {getAllCreditCards} from "../api/CreditCard_api";
import {ShowCreditCard} from "./Card";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function CreditCardsList() {
	const [cards, setCards] = useState([]);
	const navigate = useNavigate();

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
			<h6 onClick={() => navigate('/creditcards')} >Credit Cards</h6>
			<Table striped responsive>
				<tbody>
					{cards.map((card) => (
						<tr key={card.id}>
							<ShowCreditCard key={card.id} card={card} />
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}