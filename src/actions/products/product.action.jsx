import axios from 'axios';
const BASE_URL = 'http://localhost:3030/product';

const token = localStorage.getItem('token');
console.log(token);

const headers = {
  Authorization: token,
};

export const productDataGet = async () => {
  try {
    const response = await axios.get(BASE_URL, { headers });
    return response.data;
  } catch (error) {
    console.log("Error fetching product data", error.message);
    return [];
  }
};

export const ProductDetailCreate = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data, { headers });
    return response.data;
  } catch (error) {
    console.log("Error creating product", error.message);
    throw error;
  }
};

export const ProductDetailUpdate = async (id, data) => {
  try {
    const response = await axios.patch(`${BASE_URL}/update/${id}`, data, { headers });
    return response.data;
  } catch (error) {
    console.log("Error updating product", error.message);
    throw error;
  }
};

export const ProductDetailDelete = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete/${id}`, { headers });
    return { id };
  } catch (error) {
    console.log("Error deleting product", error.message);
    throw error;
  }
};

export const ProductDetailSearch = async (search) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?search=${search}`, { headers });
    return response.data;
  } catch (error) {
    console.log("Error search product", error.message);
    throw error;
  }
}