import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'What\'s up', likesCount: 26}
            ],
            defaultText: 'Eminem'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('Beka');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}

export default store;