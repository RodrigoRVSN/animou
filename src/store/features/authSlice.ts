import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthInterface {
  token: string;
}

const initialState: AuthInterface = {
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    }
  }
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
