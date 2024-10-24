import {useNavigate} from 'react-router-dom';

export function ShowLoan({ loan }) 
{
	const navigate = useNavigate();
	return (
		<div className='' onClick=
			{() => 
				{
					navigate(`/loans/${loan.id}`);
				}
			}
		>
			<p>{loan.name}</p>
			<p>{loan.type}</p>
			<p>{loan.amount}</p>
			<p>{loan.end_date}</p>
			<p>{loan.interes_rate}</p>

		</div>
		
	);
}