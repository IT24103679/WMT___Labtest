import axios from "axios";

const API_BASE_URL = "/api/items"; // Base URL for the items API

// Create a new item
export const createItem = async (itemData) => {
  const response = await axios.post(API_BASE_URL, itemData);
  return response.data;
};

// Fetch all items
export const fetchItems = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Fetch a single item by ID
export const fetchItemById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Update an item
export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, itemData);
  return response.data;
};

// Delete an item
export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};