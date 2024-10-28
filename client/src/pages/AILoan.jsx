import { useState } from 'react';
import {predictLoanApproval} from '../api/AI_api';

export function AILoan() {
	const [successMessage, setSuccessMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({
		age: '',
		amount: '',
		employment_type: '',
		loan_amount: '',
		loan_duration: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setData({...data, [name]: value});
	};

	const validateData = () => {
		if (!data.age || data.age < 18) return 'The age must be at least 18';
		if (!data.income || data.income <= 0) return 'The annual income must be positive';
		if (!data.loan_amount || data.loan_amount <= 0) return 'The loan amount must be positive';
		if (!data.loan_duration || data.loan_duration <= 0) return 'The loan duration must be positive';
		return '';
	};

	const handleClick = async () => {
		const error = validateData();
		if (error) {
			setError(error);
			return;
		}

		setLoading(true);
		setError('');
		setSuccess(false);

		try {
			const response = await predictLoanApproval(data);
			setSuccessMessage(response.data.approval_status);
			setSuccess(true);
			setError('');
		} catch (err) {
			setError('Error requesting the loan.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h5>Loan Eligibility</h5>
			<p>Ask the new Artificial Intelligence if your loan could be approved before applying</p>
			<div>
				<label>Age</label>
				<input
					type="number"
					placeholder='18'
					name="age"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<label>Anual Income</label>
				<input
					type="number"
					placeholder='1000'
					name="income"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<label>Employment Type</label>
				<input
					type="text"
					placeholder='Full Time'
					name="employment_type"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<label>Loan Amount</label>
				<input
					type="number"
					placeholder='1000'
					name="loan_amount"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div>
				<label>Loan Duration</label>
				<input
					type="number"
					placeholder='12'
					name="loan_duration"
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<button className='btn btn-secondary' onClick={handleClick} disabled={loading}>
				Predict Loan Approval</button>
			{success && <div>{successMessage}</div>}
			{error && <div>{error}</div>}
		</div>
	);
}