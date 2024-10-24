import {useNavigate} from 'react-router-dom';

export function ShowDebitCard({ card }) 
{
	const navigate = useNavigate();
	return (
		<div className='' onClick=
			{() => 
				{
					navigate(`/debitcards/${card.id}`);
				}
			}
		>
			<p>{card.name}</p>
			<p>{card.holder_name}</p>
			<p>{card.number}</p>
			<p>{card.expiration_date}</p>
			<p>{card.account_balance}</p>

		</div>
		
	);
}

export function ShowCreditCard({ card }) 
{
	const navigate = useNavigate();
	return (
		<div className='' onClick=
			{() => 
				{
					navigate(`/creditcards/${card.id}`);
				}
			}
		>
			<p>{card.name}</p>
			<p>{card.holder_name}</p>
			<p>{card.number}</p>
			<p>{card.expiration_date}</p>
			<p>{card.current_balance}</p>
			<p>{card.credit_limit}</p>
		</div>
		
	);
}