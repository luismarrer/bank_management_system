import {useEffect, useState} from "react";
import {getAllLoans} from "../api/Loan_api";
import {ShowLoan} from "./Loan";

export function LoansList() {
	const [loans, setCards] = useState([]);

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
			<h4>Loans</h4>
			{loans.map((loan) => (
				<ShowLoan key={loan.id} loan={loan} />
			))}
		</div>
	);
}