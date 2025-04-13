import API from '../api/axios';

export const registerUser = async (userData) => {
  try {
    const response = await API.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const loginUser = async (userData) => {
    try {
      const response = await API.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  