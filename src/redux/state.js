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
        },
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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText, 
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;