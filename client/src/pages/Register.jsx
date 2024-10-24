import { useState } from 'react';
import {register} from '../api/Auth_api';
import {useNavigate} from 'react-router-dom';

export function Register() {
	const [data, setData] = useState({
		username: '',
		password: '',
		confirm_password: '',
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		const {name, value} = e.target;
		setData({...data, [name]: value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.password !== data.confirm_password) {
			setError('Passwords do not match');
			return;
		}
		if (!data.username || !data.password || !data.confirm_password) {
			setError('All fields are required');
			return;
		  }
		try {
			const response = await register(data);
			const token = response.data.token;
			localStorage.setItem('token', token);
			setError('');
			alert('Registration successful');
			navigate('/');
		} catch (error) {
			setError(error.response.data.error);
		}
	};

	return (
		<div className='justify-content-center align-items-center'>
			<h1 className='text-center'>Register</h1>
			<div className='d-flex justify-content-center align-items-center'>
				<form onSubmit={handleSubmit}>
					<div className='mb-1'>
						<label className='form-label m-1'>Username</label>
						<input type="text" className='rounded-pill small' name="username" value={data.username} onChange={handleChange} />
					</div>
					<div className='mb-1'>
						<label className='form-label m-1'>Password</label>
						<input type="password" className='rounded-pill small' name="password" value={data.password} onChange={handleChange} />
					</div>
					<div className='mb-1'>
						<label className='form-label m-1'>Confirm Password</label>
						<input type="password" className='rounded-pill small' name="confirm_password" value={data.confirm_password} onChange={handleChange} />
					</div>
					<button type="submit" className='btn btn-primary rounded-pill'>Register</button>
				</form>
				{error && <div>{error}</div>}
			</div>
		</div>
	);
}
