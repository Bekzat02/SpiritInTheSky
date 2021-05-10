const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState= {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'I\'m good'},
        {id: 4, message: 'I\'m good'}
    ],
    defaultMessage: ''
};

const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const copyState={...state};
            copyState.messages=[...state.messages];
            copyState.defaultMessage = '';
            copyState.messages.push({
                id: 8,
                message: action.message
            });
            return copyState;
        }

        /*case UPDATE_NEW_MESSAGE_BODY: {
            const copyState={...state};
            copyState.defaultMessage = action.newMessage;
            return copyState;
        }*/

        default:
            return state;
    }

}
export let sendMessageCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    }
}


/*export let updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: message
    }
}*/
export default dialogReducer;