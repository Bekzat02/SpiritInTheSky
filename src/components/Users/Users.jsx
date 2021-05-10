import React from 'react';
import User from "./User";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {

    return (
        <div>

            {
                props.users.map(u => <User user={u}
                                           followingInProgress={props.followingInProgress}
                                           key={u.id}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                />
                )
            }
        </div>
    );
}

export default Users;