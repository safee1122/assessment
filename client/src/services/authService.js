import axios from "axios";
export const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(
        "https://api.example.com/login",
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
        "https://api.example.com/register",
        userInfo
      );
      return response.data;
    } catch (error) {
      throw new Error("Registration failed");
    }
  },
};
