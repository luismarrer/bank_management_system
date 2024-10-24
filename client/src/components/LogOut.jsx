import { useNavigate } from 'react-router-dom';

export function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className="btn btn-link nav-link">
            Log Out
        </button>
    );
}
