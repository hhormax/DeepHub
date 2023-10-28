import { authAPI } from "../API/api";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.payload,
        }
        default:
            return state;
}
}

export const setAuthUserData = ({userId, login, email, isAuth}) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if(response.data.resultCode === 0){
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData({ userId: id, login, email, isAuth: true }));
    }
}

export const logiN = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if(response.data.resultCode === 0){
      dispatch(getAuthUserData());
    }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();    
    if(response.data.resultCode === 0){
      dispatch(setAuthUserData(0, null, null, false));
    }  
}

export default authReducer;