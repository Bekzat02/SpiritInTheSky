import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let post = props.posts.map(m => <Post message={m.message} likecount={m.likesCount} img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ0-g8vswsaeEKDYEYiBWtgYBXH0Zhy06CAw&usqp=CAU'/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let updateText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.defaultText}
                              onChange={updateText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
};

export default MyPosts;