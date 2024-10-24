import { DebitCardsList } from '../components/DebitCardsList';
import { CreditCardsList } from '../components/CreditCardsList';
import { LoansList } from '../components/LoansList';

export function Dashboard() 
{
	return (
		<div>
			<DebitCardsList />
			<CreditCardsList />
			<LoansList />
		</div>
	);
}