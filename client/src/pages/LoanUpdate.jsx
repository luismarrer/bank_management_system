import {deleteLoan, updateLoan, getLoan} from '../api/Loan_api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

export function LoanUpdate() {
	const [data, setData] = useState({});
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const params = useParams();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	useEffect(() => {
		async function loadLoan() {
			const { data } = await getLoan(params);
			setData(data);
		}
		loadLoan();
	}, [params]);

	const handleClick = async () => {
		try {
			updateLoan(data);
			setSuccess(true);
			setError('');
		} catch (err) {
			setSuccess(false);
			setError('Failed to update debit card.');
		}
	};

	return (
		<div>
			<h5>Update your Loan</h5>
			<div>
				<label>Loan Name</label>
				<input
					type="text"
					placeholder={data.name}
					value={data.name}
					name="name"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<br></br>
				<p>Type: {data.loan_type}</p>
				<p>Amount: {data.amount}</p>
				<p>Date to pay: {data.end_date}</p>
				<p>Interest Rate: %{data.interest_rate}</p>
			</div>
			<button className='btn btn-danger mt-3' onClick={async () =>
				{
					const accepted = window.confirm('Are you sure you want to delete this loan?')
					if (accepted) {
						await deleteLoan(params);
						navigate('/');
					}
				}
			}>
				Delete
			</button>
			<button onClick={handleClick} className="btn btn-primary mt-3">
				Update your Loan
			</button>
			{success && <p className="text-success mt-2">Loan successfully updated.</p>}
			{error && <p className="text-danger mt-2">{error}</p>}
		</div>
	)
}
