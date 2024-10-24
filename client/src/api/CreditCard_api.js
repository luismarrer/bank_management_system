import {bank_management} from './index_api.js';

	// Get all credit cards
	export const getAllCreditCards =  () =>
		bank_management.get('creditcards/', {
			headers: {
			  'Authorization': `Token ${localStorage.getItem('token')}`
			}
		  });

	// Get credit card by id
	export const getCreditCard =  credit_card =>
		bank_management.get(`creditcards/${credit_card.id}`, {
			headers: {
			  'Authorization': `Token ${localStorage.getItem('token')}`
			}
		  });

	// Create credit card
	export const createCreditCard =  credit_card =>
		bank_management.post(`creditcards/`, credit_card, {
			headers: {
			  'Authorization': `Token ${localStorage.getItem('token')}`
			}
		  });

	// Update credit card
	export const updateCreditCard =  credit_card =>
		bank_management.patch(`creditcards/${credit_card.id}/`, credit_card, {
			headers:
			{
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		});

	// Delete credit card
	export const deleteCreditCard =  credit_card =>
		bank_management.delete(`creditcards/${credit_card.id}/`, {
			headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		});
