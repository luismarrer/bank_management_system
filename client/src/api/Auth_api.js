import axios from 'axios';

export const bank_management = axios.create({
	  baseURL: 'http://localhost:8000/auth/',
});

export function register(data) {
	return bank_management.post('register/', data);
}

export function login(data) {
	return bank_management.post('login/', data);
}