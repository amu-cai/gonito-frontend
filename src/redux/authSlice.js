import { createSlice } from '@reduxjs/toolkit';
import LOCAL_STORAGE from '../utils/localStorage';

const initialState = {
  isLoggedIn: false,
  user: null,
  isAdmin: null,
  isAuthor: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { user, token, sessionReload } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      if (!sessionReload) {
        localStorage.setItem(LOCAL_STORAGE.LOG_IN_TIME, Date.now());
        localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, token);
      }
    },
    logOut: (state, action) => {
      const { redirectToRootPage } = action.payload;
      state.isLoggedIn = false;
      state.user = null;
      state.isAdmin = null;
      state.isAuthor = null;
      localStorage.removeItem(LOCAL_STORAGE.LOG_IN_TIME);
      localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
      redirectToRootPage();
    },
    setRightsInfo: (state, action) => {
      const { isAdmin, isAuthor } = action.payload;
      state.isAdmin = isAdmin;
      state.isAuthor = isAuthor;
    },
  },
});

export const { logIn, logOut, setRightsInfo } = authSlice.actions;

export default authSlice.reducer;
