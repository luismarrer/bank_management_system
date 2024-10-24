import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react';
import {Navigation} from './components/Navigation';
import {Toaster} from 'react-hot-toast';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import {DebitCardsPage} from './pages/DebitCardsPage';
import {DebitCardUpdate} from './pages/DebitCardUpdate';
import {CreditCardsPage} from './pages/CreditCardsPage';
import {CreditCardUpdate} from './pages/CreditCardUpdate';
import {LoansPage} from './pages/LoansPage'
import { LoanUpdate } from './pages/LoanUpdate';
import {Register} from './pages/Register';
import { Login } from './pages/Login';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const publicRoutes = ['/login', '/register'];
		if (!token && !publicRoutes.includes(location.pathname)) {
			navigate('/register');
		  }
		}, [navigate]);
	return (
			<div className="d-flex bg-dark text-light justify-content-center  align-items-center">
				<Navigation />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path="/debitcards" element={<DebitCardsPage />} />
					<Route path='/debitcards/:id' element={<DebitCardUpdate />} />
					<Route path="/creditcards" element={<CreditCardsPage />} />
					<Route path='/creditcards/:id' element={<CreditCardUpdate />} />
					<Route path="/loans" element={<LoansPage />} />
					<Route path='/loans/:id' element={<LoanUpdate/>} />
					{!localStorage.getItem('token') && <Route path="*" element={<Navigate to="/register" />} />}
				</Routes>
				<Toaster />
			</div>
	);

}

export default App
