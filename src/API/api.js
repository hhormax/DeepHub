import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5ad32d75-2fe0-4ff5-aacd-97cd85440481"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
                return response.data;
            }
        )
    },

    unfollowUser(userId){
        return instance.delete(`/follow/${userId}`)
            .then(response=>{
                return response.data;
            }
        )
    },

    followUser(userId){
        return instance.post(`/follow/${userId}`)
            .then(response=>{
                return response.data;
            }
        )
    },

    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    }
}


export const authAPI = {
    me(){
        return instance.get('auth/me')
    }
}


