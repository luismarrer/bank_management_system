import {deleteCreditCard, updateCreditCard, getCreditCard} from '../api/CreditCard_api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

export function CreditCardUpdate() {
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
		async function loadDebitCard() {
			const { data } = await getCreditCard(params);
			setData(data);
		}
		loadDebitCard();
	}, [params]);

	const handleClick = async () => {
		try {
			updateCreditCard(data);
			setSuccess(true);
			setError('');
		} catch (err) {
			setSuccess(false);
			setError('Failed to update debit card.');
		}
	};

	return (
		<div>
			<h5>Update your Credit Card</h5>
			<div>
				<label>Card Name</label>
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
				<p>Card Number: {data.number}</p>
				<p>Expiration Date: {data.expiration_date}</p>
				<p>Cardholder Name: {data.holder_name}</p>
				<p>Current Balance: {data.current_balance}</p>
				<p>Available Credit: {data.credit_limit}</p>
			</div>
			<button className='btn btn-danger mt-3' onClick={async () =>
				{
					const accepted = window.confirm('Are you sure you want to delete this credit card?')
					if (accepted) {
						await deleteCreditCard(params);
						navigate('/');
					}
				}
			}>
				Delete
			</button>
			<button onClick={handleClick} className="btn btn-primary mt-3">
				Update your Credit Card
			</button>
			{success && <p className="text-success mt-2">Credit card successfully updated.</p>}
			{error && <p className="text-danger mt-2">{error}</p>}
		</div>
	)
}
