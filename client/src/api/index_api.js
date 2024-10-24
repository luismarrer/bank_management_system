import axios from 'axios';

export const bank_management = axios.create({
	  baseURL: 'http://localhost:8000/api/',
});