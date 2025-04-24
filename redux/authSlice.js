import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

export const getToken = async () => {
  const token = await SecureStore.getItemAsync('accessToken');

  if(token === null) return null;

  //복호화된 토큰
  const decodedToken = jwtDecode(token);

  //현재날짜및시간
  const currentTime = Date.now() / 1000;

  //토큰의 만료기간이 지났으면
  if(decodedToken.exp < currentTime){
    await SecureStore.deleteItemAsync('accessToken');
    return null;
  }else{
    return token;
  }
}

const authSlice = createSlice({
  name : 'auth',
  initialState : {token : null, isLogin : false},
  reducers :{
    loginReducer : (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    },
    logoutReducer : (state) => {
      state.token = null;
      state.isLogin = false;
    }
  }
});

export const {loginReducer, logoutReducer} = authSlice.actions;
export default authSlice;


