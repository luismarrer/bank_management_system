import {LoansList} from '../components/LoansList';
import {RequestLoan} from '../components/CreateLoan'

export function LoansPage() {
	return (
		<div>
			<div>
				<LoansList />
			</div>
			<div>
				<RequestLoan />
			</div>
		</div>
	);
}