import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'What\'s up', likesCount: 26}
    ],
    defaultText: 'Eminem',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                message: state.defaultText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                defaultText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                defaultText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export let getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export default profileReducer;