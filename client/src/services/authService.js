import axios from "axios";
export const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw new Error("Invalid username or password");
    }
  },
  register: async (userInfo) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}auth/register`,
        userInfo
      );
      return response.data;
    } catch (error) {
      throw new Error("Registration failed");
    }
  },
};
