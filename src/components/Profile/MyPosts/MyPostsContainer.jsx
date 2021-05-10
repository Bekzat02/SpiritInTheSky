import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateText = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts postAdd={addPost}
                 updateNewPostText={updateText}
                 posts={state.posts}
                 defaultText={state.defaultText}
        />
    );
};*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        defaultText: state.profilePage.defaultText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;