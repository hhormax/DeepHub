import { authAPI } from "../API/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET-INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {
                initialized: true,
        }
        default:
            return state;
}
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    })
    
}


export default appReducer;