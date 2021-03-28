import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogPage=props.dialogsPage;

    let dialogsElements = dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = dialogPage.messages.map(m => <Message message={m.message}/>);
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let UpdateMessage = (e) => {
        let message =e.target.value;
        props.updateNewMessageBody(message);
    }
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <br/>
                <div>
                    <div>
                    <textarea
                        value={props.defaultMessage}
                        onChange={UpdateMessage}
                    />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;