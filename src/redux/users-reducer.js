const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_URERS = 'SET-URERS';

let initialState = {
  users: [
        {id: 1, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: false, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}}, 
        {id: 2, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: true, fullName: 'Andrey', status: 'Boss too', location: {city: 'Moscow', country: 'Russia'}}, 
        {id: 3, photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', followed: false, fullName: 'Sasha', status: 'Boss too too', location: {city: 'Kiev', country: 'Ukraine'}},  
         ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: true};
                    }
                    return u;
                })
        }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: false};
                    }
                    return u;
                })
        }
        case SET_URERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
}
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_URERS, users})


export default usersReducer;