import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6fd89697-288c-4fc6-8169-f6886a11cd31"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => {
                return r.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}