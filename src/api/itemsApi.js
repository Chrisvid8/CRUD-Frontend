import axios from 'axios';

const API_URL = 'https://crud-backend-q5f8.onrender.com/api/items/';

export const getItems = () => axios.get(API_URL);
export const addItem = (item) => axios.post(API_URL, item);
export const updateItem = (id, item) => axios.put(`${API_URL}${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}${id}`);