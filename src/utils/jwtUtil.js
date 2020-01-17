import jwtDecode from 'jwt-decode';
import {getLocalStorage} from "./storageUtil";

export let isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (e) {
    return false;
  }
};

export let decodeUsername = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.sub;
  } catch (e) {
    return null;
  }
};

export let getToken = () => {
  return getLocalStorage("antelope-token");
};

export let isAuthenticated = () => {
  return !!getToken();
};

export let getUserData = () => {
  return getLocalStorage('userName');
};

export let isUserLoggedIn = () => {
  return !!getUserData();
}