import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import authAPI from "../api/auth-api"

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  loading: false,
  error: false,
  success: false,
  message: ""
}

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    return await authAPI.registerUser(userData)
  } catch (error) {
    const message =  error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    return await authAPI.loginUser(userData)
  } catch (error) {
    const message = error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    return await authAPI.logoutUser()
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false
      state.error = false
      state.success = false
      state.message = ""
    }
  },
  extraReducers: builder => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.loading = true
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.user = action.payload
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.user = null
      state.message = action.payload
    })
    .addCase(loginUser.pending, (state) => {
      state.loading = true
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.user = action.payload
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.user = null
      state.message = action.payload
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = null
    })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer