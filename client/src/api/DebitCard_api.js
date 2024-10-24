import { bank_management } from './index_api';

// Get all debit cards
export const getAllDebitCards = () => 
  bank_management.get('debitcards/', {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

// Get debit card by id
export const getDebitCard = debit_card => 
  bank_management.get(`debitcards/${debit_card.id}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

// Create debit card
export const createDebitCard = debit_card => 
  bank_management.post('debitcards/', debit_card, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

// Update debit card
export const updateDebitCard = debit_card => 
  bank_management.patch(`debitcards/${debit_card.id}/`, debit_card, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

// Delete debit card
export const deleteDebitCard = debit_card => 
  bank_management.delete(`debitcards/${debit_card.id}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });
