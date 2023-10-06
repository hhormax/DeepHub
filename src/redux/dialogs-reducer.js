const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
            ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){        
        case SEND_MESSAGE:
          let body = action.newMessageBody;
          return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 6, message: body}]
          }
  
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;