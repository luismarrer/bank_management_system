import {useEffect, useState} from "react";
import {getAllDebitCards} from "../api/DebitCard_api";
import {ShowDebitCard} from "./Card";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function DebitCardsList() {
	const [cards, setCards] = useState([]);
	const navigate = useNavigate();

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
			<h6 onClick={() => navigate('/debitcards')}>Debit Cards</h6>
			<Table striped responsive>
				<tbody>
					{cards.map((card) => (
						<tr key={card.id}>
							<ShowDebitCard key={card.id} card={card} />
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}