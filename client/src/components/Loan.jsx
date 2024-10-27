import {useNavigate} from 'react-router-dom';

export function ShowLoan({ loan }) 
{
	const navigate = useNavigate();
	return (
		<>
			<td className='text-start' onClick={() => navigate(`/loans/${loan.id}`)}>{loan.name}</td>
			<td className='text-center' onClick={() => navigate(`/loans/${loan.id}`)}>{loan.end_date}</td>
			<td className='text-end' onClick={() => navigate(`/loans/${loan.id}`)}>${loan.amount}</td>
		</>
		
	);
}