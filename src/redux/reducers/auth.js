import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    userCar: {},
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    saveUserCar: (state, action) => {
      state.userCar = action.payload;
    },
  },
});

export const {saveUserData, saveUserCar} = authSlice.actions;

export default authSlice.reducer;
