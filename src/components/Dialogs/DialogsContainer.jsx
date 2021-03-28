import React from "react";
import s from './Dialogs.module.css';
import {
    sendMessageCreator,
    updateNewMessageActionCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContaine = (props) => {
    let state = props.store.getState().dialogsPage;

    let AddMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let UpdateMessage = (e) => {
        let message=updateNewMessageActionCreator(e);
        props.store.dispatch(message);
    }
    return (
        <Dialogs addMessageActionCreator={AddMessage}
                 updateNewMessageActionCreator={UpdateMessage}
                 dialogsPage={state}
                 defaultMessage={state.defaultMessage}
        />
    );
};*/

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        defaultMessage: state.dialogsPage.defaultMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;