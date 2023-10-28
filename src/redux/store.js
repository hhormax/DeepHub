import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Its my first post.', likesCount: 10}, 
                    {id: 2, message: 'Hi. how are you?', likesCount: 12}
                   ],
            newPostText: 'it-kam' 
        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Dimon'}, 
                     {id: 2, name: 'Max'}, 
                     {id: 3, name: 'Andrey'}, 
                     {id: 4, name: 'Vadim'},
                     {id: 5, name: 'Sasha'}, 
                     {id: 6, name: 'Nikita'},
            ],
        
            messages: [{id: 1, message: 'Hi'}, 
                        {id: 2, message: 'How are you?'}, 
                        {id: 3, message: 'Yo'}               
            ],
            newMessageBody: ""
        },
        sidebar: {},
        friendsPage: {
        navbarPersons: [{id: 1, name: 'Dimon'}, 
                        {id: 2, name: 'Max'}, 
                        {id: 3, name: 'Andrey'}
                    ]
                    }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);  
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);  
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);    
        
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;