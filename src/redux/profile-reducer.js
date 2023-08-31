const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [{id: 1, message: 'Its my first post.', likesCount: 10}, 
         {id: 2, message: 'Hi. how are you?', likesCount: 12}
         ], 
  newPostText: 'it-kam' 
}

const profileReducer = (state = initialState, action) => {

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
                newPostText: action.newPostText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, newText: text}}

export default profileReducer;