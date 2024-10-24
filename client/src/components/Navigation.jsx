import { Navbar, Nav } from 'react-bootstrap';
import {Logout} from './LogOut';

export function Navigation() 
{
	const token = localStorage.getItem('token');
  return (
      <Navbar bg="dark" variant="dark" className="flex-column">
        <Nav className="flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/debitcards">Debit Cards</Nav.Link>
          <Nav.Link href="/creditcards">Credit Cards</Nav.Link>
          <Nav.Link href="/loans">Loans</Nav.Link>
		  {token ? (
		  <Nav><Logout /></Nav>
		  ) : (
		  <Nav.Link href="/login">Login</Nav.Link>
		  )}
        </Nav>
      </Navbar>
  );
}
