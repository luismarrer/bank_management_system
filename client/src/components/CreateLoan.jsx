import { useState } from "react";
import { createLoan } from "../api/Loan_api";

export function RequestLoan() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [data, setData] = useState({
	  name: '',
	  loan_type: 'P',
	  amount: 0,
	  end_date: '',
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setData({ ...data, [name]: value });
	};
  
	const handleClick = async () => {
	  try {
		await createLoan(data);
		setSuccess(true);
		setError('');
	  } catch (err) {
		setError('Error requesting the loan.');
	  }
	};
  
	return (
	  <div>
		<h3>Request your Loan</h3>
		<div>
		  <label>Loan Name</label>
		  <input
			type="text"
			placeholder='My Loan'
			name="name"
			value={data.name}
			onChange={handleChange}
			className="form-control"
		  />
		</div>
		<div>
		  <label>Loan Type</label>
		  <select
			type="text"
			placeholder='Personal Loan'
			name="loan_type"
			value={data.loan_type}
			onChange={handleChange}
			className="form-control"
		  >
		  <option value="P">Personal Loan</option>
		  <option value="E">Student Loan</option>
		  <option value="H">Mortgage Loan</option>
		  </select>
		</div>
		<div>
		  <label>Amount</label>
		  <input
			type="number"
			placeholder='1000'
			name="amount"
			value={data.amount}
			onChange={handleChange}
			className="form-control"
		  />
		</div>
		<div>
		  <label>End Date</label>
		  <input
			type="date"
			name="end_date"
			value={data.end_date}
			onChange={handleChange}
			className="form-control"
		  />
		</div>
		<button onClick={handleClick} className="btn btn-primary mt-3">
		  Request your Loan
		</button>
		{success && <p className="text-success mt-2">Loan successfully requested.</p>}
		{error && <p className="text-danger mt-2">{error}</p>}
	  </div>
	);
  }