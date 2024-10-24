import { bank_management } from "./index_api";


  // Get all loans
  export const getAllLoans = () =>
	bank_management.get('loans/', {
		headers: {
		  'Authorization': `Token ${localStorage.getItem('token')}`
		}
	  });

  // Get loan by id
  export const getLoan = loan =>
	bank_management.get(`loans/${loan.id}/`, {
	  headers: 
	  {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	});

  // Create loan
  export const createLoan = loan =>
	bank_management.post(`loans/`, loan, {
	  headers:
	  {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	});

  // Update loan
  export const updateLoan = loan =>
	bank_management.patch(`loans/${loan.id}/`, loan, {
	  headers:
	  {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	});

  // Delete loan
  export const deleteLoan = loan =>
	bank_management.delete(`loans/${loan.id}/`, {
	  headers:
	  {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	});
