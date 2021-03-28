import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/originals/fa/ee/cd/faeecdd470b95803ac418a510d9ee908.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    );
};

export default ProfileInfo;