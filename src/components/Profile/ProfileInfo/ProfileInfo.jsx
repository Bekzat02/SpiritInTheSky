import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatusHook";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusHook status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;