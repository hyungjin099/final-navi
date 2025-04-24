import axios from "axios"
import { Platform } from "react-native";

export const api_join = (joinData) => {
  const baseUrl = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';
  const response = axios.post(`${baseUrl}/users/join`, joinData);
  return response;
}

export const api_login = (loginData) => {
  const baseUrl = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';
  const response = axios.post(`${baseUrl}/member/login`, loginData);
  return response; 
}