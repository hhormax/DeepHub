import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SET_MY_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [], 
  newPostText: '' ,
  photo: {},
  status: '',
  myProfileInfo: null
}

const myProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5, 
                message: state.newPostText, 
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                    photo: {
                        ...state.photo,
                        large: action.photo.large
                    }
            }
        }
        case SET_MY_PROFILE:{
            return {
                ...state,
                myProfileInfo: action.myInfo
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, newText: text}}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo})
export const setMyProfile = (myInfo) => ({type: SET_MY_PROFILE, myInfo})

export const getMyProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setMyProfile(response.data));     
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export default myProfileReducer;