import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers, setCurrentPage,
    unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSelec
} from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber,pageSize);
    }

    render() {
        return <>
            <Paginator currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
            />
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingInProgress={this.props.followingInProgress} />}
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users:getUsersSelec(state) ,
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
*/


/*
let AuthRedirectComponent = withAuthRedirect(UsersContainer)
*/


export default compose (
    connect(mapStateToProps,
        { follow, unfollow,setCurrentPage, requestUsers}),
    )
(UsersContainer)