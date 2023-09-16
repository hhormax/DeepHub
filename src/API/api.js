import axios from "axios"

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ad0cf63c-3a94-4b92-86a0-d595447dfaef"
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
    }
}


