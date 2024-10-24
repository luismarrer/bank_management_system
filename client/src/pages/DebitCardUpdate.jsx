import {deleteDebitCard, updateDebitCard, getDebitCard} from '../api/DebitCard_api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

export function DebitCardUpdate() {
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
			const { data } = await getDebitCard(params);
			setData(data);
		}
		loadDebitCard();
	}, [params]);

	const handleClick = async () => {
		try {
			updateDebitCard(data);
			setSuccess(true);
			setError('');
		} catch (err) {
			setSuccess(false);
			setError('Failed to update debit card.');
		}
	};

	return (
		<div>
			<h3>Update your Debit Card</h3>
			<div>
				<label>Card Name</label>
				<input
					type="text"
					placeholder={data.name}
					name="name"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<p>{data.holder_name}</p>
				<p>{data.expiration_date}</p>
				<p>{data.number}</p>
				<p>{data.account_balance}</p>
			</div>
			<button className='btn btn-danger mt-3' onClick={async () =>
				{
					const accepted = window.confirm('Are you sure you want to delete this debit card?')
					if (accepted) {
						await deleteDebitCard(params);
						navigate('/');
					}
				}
			}>
				Delete
			</button>
			<button onClick={handleClick} className="btn btn-primary mt-3">
				Update your Debit Card
			</button>
			{success && <p className="text-success mt-2">Debit card successfully updated.</p>}
			{error && <p className="text-danger mt-2">{error}</p>}
		</div>
	)
}
