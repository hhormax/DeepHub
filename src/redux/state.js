const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        if(action.type === ADD_POST){
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText, 
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT', 
      newText: text
    }
  }

  export const sendMessageCreator = () => ({type: SEND_MESSAGE})
  
  export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, 
      body: body
    }
  }

export default store;
window.store = store;