import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

/*
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
*/

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'What\'s up', likesCount: 26}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        /*case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                defaultText: action.newText
            }
        }*/
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
/*
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
*/
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})

export let getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export let getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}
export let updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode===0) {
                dispatch(setStatus(status));
            }
}

export default profileReducer;