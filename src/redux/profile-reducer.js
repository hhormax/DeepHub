import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [], 
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5, 
                message: action.newPostText, 
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStaus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
             .then(response =>{
                dispatch(setUserProfile(response.data));
             })   
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
             .then(response =>{
                dispatch(setStaus(response.data));
             })   
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
             .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(setStaus(response.data));
                }
             })   
}


export default profileReducer;