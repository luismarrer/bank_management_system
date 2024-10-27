import {useEffect, useState} from "react";
import {getAllLoans} from "../api/Loan_api";
import {ShowLoan} from "./Loan";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function LoansList() {
	const [loans, setCards] = useState([]);
	const navigate = useNavigate();

	useEffect(() =>
		{
			async function loadLoans()
			{
				const res = await getAllLoans();
				setCards(res.data);
			}
			loadLoans();
		}, []);
	return (
		<div>
			<h6 onClick={() => navigate('/loans')}>Loans</h6>
			<Table striped>
				<tbody>
					{loans.map((loan) => (
						<tr key={loan.id}>
							<ShowLoan key={loan.id} loan={loan} />
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}