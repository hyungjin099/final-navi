import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { loginReducer, logoutReducer } from './authSlice';


/*
// falsy : null, undefined, 0, 빈문자, NaN
// 기존 방식 (OR 연산자 사용) - 왼쪽 데이터가 falsy일때 오른쪽 데이터 실행
const username = user.name || 'Guest';


// Nullish 병합 연산자 사용 - 왼쪽 데이터가 null 또는 undefined일때만 오른쪽 데이터 실행
const username = user.name ?? 'Guest';
*/

//토큰에서 로그인한 회원 email 추출
//토큰에서 Email 못 빼면 리턴 null, 있으면 email 반환
export const getUserSubFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    // ? : 옵셔럴 체이닝 연산자
    //decoded가 null 또는 undefined -> undefined
    return decoded?.sub || null;

  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};

export const getUserRoleFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.role || null;
  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};
