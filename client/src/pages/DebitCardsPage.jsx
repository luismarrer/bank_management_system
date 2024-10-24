import {DebitCardsList} from '../components/DebitCardsList';
import {RequestDebitCard} from '../components/CreateCard';

export function DebitCardsPage() {
	return (
		<div>
			<div>
				<DebitCardsList />
			</div>
			<div>
				<RequestDebitCard />
			</div>
		</div>
		);
}