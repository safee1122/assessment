import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import { clearError, setError, setLoading } from "./appSlice";
import Cookies from "js-cookie";

// Async thunks for login and register

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await authService.login(credentials);
  Cookies.set("token", response?.data?.token); // Save token in a cookie
  localStorage.setItem("userInfo", JSON.stringify(response?.data)); // Save user data in local Storage
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (userInfo) => {
  const response = await authService.register(userInfo);
  return response.data;
});

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || false,
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
      .addCase(login.pending, () => {
        setLoading(true);
        clearError();
      })
      .addCase(login.fulfilled, (state, action) => {
        setLoading(true);
        clearError();
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        setLoading(true);
        setError(action.error.message);
      })
      .addCase(register.pending, () => {
        setLoading(true);
        clearError();
      })
      .addCase(register.fulfilled, (state) => {
        setLoading(true);
        clearError();
      })
      .addCase(register.rejected, (state, action) => {
        setLoading(true);
        setError(action.error.message);
      });
  },
});

// Export the slice and actions
export const { logout } = authSlice.actions;
export default authSlice.reducer;
