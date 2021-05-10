import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field,reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


const maxLength10 = maxLengthCreator(10);


let AddNewPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostText"} validate={[required,maxLength10]}/>
        </div>
        <div>
            <button>
                Add post
            </button>
        </div>
    </form>
}

let AddNewPostFormRedux= reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let post = props.posts.map(m => <Post message={m.message} likecount={m.likesCount} img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ0-g8vswsaeEKDYEYiBWtgYBXH0Zhy06CAw&usqp=CAU'/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    /*
    let newPostElement = React.createRef();
    */

/*
    let updateText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }*/

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
}
);



export default MyPosts;