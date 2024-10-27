import {useNavigate} from 'react-router-dom';

export function ShowDebitCard({ card }) 
{
	const navigate = useNavigate();
	return (
		<>
			<td className='text-start' onClick={() => navigate(`/debitcards/${card.id}`)}>{card.name}</td>
			<td className='text-center' onClick={() => navigate(`/debitcards/${card.id}`)}>x{card.number.slice(-4)}</td>
			<td className='text-end' onClick={() => navigate(`/debitcards/${card.id}`)}>${card.account_balance}</td>
		</>
	);
}

export function ShowCreditCard({ card }) 
{
	const navigate = useNavigate();
	return (
		<>
			<td className='text-start' onClick={() => navigate(`/creditcards/${card.id}`)}>{card.name}</td>
			<td className='text-center' onClick={() => navigate(`/creditcards/${card.id}`)}>x{card.number.slice(-4)}</td>
			<td className='text-end' onClick={() => navigate(`/creditcards/${card.id}`)}>${card.current_balance}/${card.credit_limit}</td>
		</>
	);
}