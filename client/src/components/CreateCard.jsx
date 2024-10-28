import { useState } from 'react';
import { createDebitCard } from '../api/DebitCard_api';
import {createCreditCard} from '../api/CreditCard_api';

export function RequestDebitCard() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    name: '',
    holder_name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = async () => {
    try {
      await createDebitCard(data);
      setSuccess(true);
      setError('');
    } catch (err) {
      setError('Error requesting the card.');
    }
  };

  return (
    <div>
      <h5>Request your Debit Card</h5>
      <div>
        <label>Card Name</label>
        <input
          type="text"
		  placeholder='My Debit Card'
          name="name"
          value={data.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Holder Name</label>
        <input
          type="text"
		  placeholder='Pedro Perez'
          name="holder_name"
          value={data.holder_name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button onClick={handleClick} className="btn btn-primary mt-3">
        Request your Debit Card
      </button>
      {success && <p className="text-success mt-2">Debit card successfully requested.</p>}
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}

export function RequestCreditCard() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [data, setData] = useState({
	  name: '',
	  holder_name: ''
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setData({ ...data, [name]: value });
	};
  
	const handleClick = async () => {
	  try {
		await createCreditCard(data);
		setSuccess(true);
		setError('');
	  } catch (err) {
		setError('Error requesting the card.');
	  }
	};
  
	return (
	  <div>
		<h5>Request your Credit Card</h5>
		<div>
		  <label>Card Name</label>
		  <input
			type="text"
			placeholder='My Credit Card'
			name="name"
			value={data.name}
			onChange={handleChange}
			className="form-control"
		  />
		</div>
		<div>
		  <label>Holder Name</label>
		  <input
			type="text"
			placeholder='Pedro Perez'
			name="holder_name"
			value={data.holder_name}
			onChange={handleChange}
			className="form-control"
		  />
		</div>
		<button onClick={handleClick} className="btn btn-primary mt-3">
		  Request your Credit Card
		</button>
		{success && <p className="text-success mt-2">Credit card successfully requested.</p>}
		{error && <p className="text-danger mt-2">{error}</p>}
	  </div>
	);
  }
  