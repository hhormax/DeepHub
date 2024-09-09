import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET-CAPTCHA-URL-SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = ({ userId, login, email, isAuth }) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData({ userId: id, login, email, isAuth: true }));
  }
};

export const logiN = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (response.data.resultCode === 10) {
    dispatch(getCaptchaUrl());
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(
      setAuthUserData({ userId: null, login: null, email: null, isAuth: false })
    );
  }
};

export default authReducer;
