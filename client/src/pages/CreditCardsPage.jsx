import {CreditCardsList} from '../components/CreditCardsList';
import {RequestCreditCard} from '../components/CreateCard';

export function CreditCardsPage() {
	return (
		<div>
			<div>
				<CreditCardsList />
			</div>
			<div>
				<RequestCreditCard />
			</div>
		</div>
	);
}
//CreateDebitCard