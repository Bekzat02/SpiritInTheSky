import React from "react";
import s from './Dialogs.module.css';
import {
    sendMessageCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message));
        }
    }
}

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs)
*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);

