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
        console.warn('Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`/profile/${userId}`);
    },

    getStatus(userId){
        return instance.get(`/profile/status/${userId}`);
    },

    updateStatus(status){
        return instance.put(`/profile/status`, {status: status});
    }
}


export const authAPI = {
    me(){
        return instance.get('auth/me');
    },

    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logout(){
        return instance.delete('auth/login');
    }
}


