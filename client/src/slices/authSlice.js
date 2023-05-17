import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
// Async thunks for login and register

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}auth/login`,
      credentials
    );
    Cookies.set("token", response?.token); // Save token in a cookie
    localStorage.setItem("userInfo", JSON.stringify(response?.user)); // Save user data in local Storage
    return response.data;
  } catch (error) {
    throw new Error("Invalid username or password");
  }
});

export const register = createAsyncThunk("auth/register", async (userInfo) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}auth/register`,
      userInfo
    );
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
});

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || false,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    logout(state) {
      Cookies.remove("token");
      localStorage.removeItem("userInfo");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        toast.success("User registered successfully");
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      });
  },
});

// Export the slice and actions
export const { logout } = authSlice.actions;
export default authSlice.reducer;
