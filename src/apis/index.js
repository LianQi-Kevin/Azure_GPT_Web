import axios from "axios";
import {getLocalStorage} from "../storageUtils/localStorage.js";
import {ElMessage} from "element-plus";
import router from "../router/index.js";
import {getCookie, setCookie} from "../storageUtils/cookies.js";


function getAccessToken(){
    let jwtToken = getCookie("jwt_token")
    if (jwtToken === null){
        const refreshAxios = new loginAxios()
        refreshAxios.refreshToken()
        jwtToken = getCookie("jwt_token")
    }
    return jwtToken
}

function getRefreshToken() {
    const refreshToken = getLocalStorage("refresh_token")
    if (refreshToken === null) {
        ElMessage.error("登陆已过期, 请重新登录")
        router.push({name: 'login'}).then(function (error){
            ElMessage.error("failed push to " + error.to.name)
        })
    }
    return refreshToken
}


export class loginAxios{
    constructor() {
        this.localAxios = axios.create({
            baseURL: "http://127.0.0.1:5000",
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 15000
        })
    }
    login(username, password){
        return this.localAxios.post('/login',
            JSON.stringify({username: username, password: password}), {})
    }

    refreshToken(){
        const refreshToken = getRefreshToken()
        this.localAxios.post('/refresh', null, {
            headers: {
                "Authorization": "Bearer " + refreshToken
            }
        }).then(function (response) {
                setCookie("jwt_token", response.data["data"]["access_token"], "14m")
            }
        ).catch(function (error) {
            ElMessage.error(error)
        })
    }
}

export class accountAxios{
    constructor() {
        this.localAxios = axios.create({
            baseURL: "http://127.0.0.1:5000/",
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 15000
        })
    }
    getAccountInfo(){
        const jwtToken = getAccessToken()
        return this.localAxios.get('/account', {
            headers: {
                "Authorization": "Bearer " + jwtToken
            }
        })
    }
}