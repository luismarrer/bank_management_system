import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/Auth_api';

export function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      setError('Both fields are required');
      return;
    }
    try {
      const response = await login(data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="justify-content-center align-items-center">
      <h1 className="text-center">Login</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="form-label m-1">Username</label>
            <input
              type="text"
              className="rounded-pill small"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <label className="form-label m-1">Password</label>
            <input
              type="password"
              className="rounded-pill small"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill">
            Login
          </button>
        </form>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
