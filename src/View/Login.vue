<template>
    <div class="container">
        <i style="--clr:#00ff0a;" class="Decorative"></i>
        <i style="--clr:#ff0057;" class="Decorative"></i>
        <i style="--clr:#fffd44;" class="Decorative"></i>
        <div class="login" style="text-align: -webkit-center">
            <h1>Login</h1>
            <div class="inputBox">
                <el-input type="text" placeholder="Username" v-model="loginForm.username" size="large"/>
            </div>
            <div class="inputBox">
                <el-input placeholder="Password" v-model="loginForm.password" show-password size="large"/>
            </div>
            <div class="inputBox">
                <el-button type="primary" @click="loginSubmit" size="large">Sign In</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {ElMessage} from "element-plus";
import router from "../router"
import {setLocalStorage} from '../storageUtils/localStorage.js'
import {setCookie} from "../storageUtils/cookies.js";

export default {
    // 定义响应式数据体，用return返回响应式数据，使用this来指向该数据
    data() {
        return{
            loginForm: {
                username: "",
                password: ""
            },
        }
    },
    // 定义响应式函数
    methods: {
        loginSubmit() {
            this.$loginAxios.login(this.loginForm.username, this.loginForm.password
            ).then(function (response) {
                ElMessage.success("Success Login");
                setCookie("jwt_token", response.data["data"]["access_token"], "14m");
                setLocalStorage("refresh_token", response.data["data"]["refresh_token"], "29d");
                router.push({path: '/chat'})
            }).catch(function (error) {
                ElMessage.error(error);
            });
        }
    }
}
</script>

<style>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 450px;
    min-height: 450px;
    max-width: 600px;
    max-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container i.Decorative {
    position: absolute;
    inset: 0;
    border: 2px solid #fff;
    transition: 0.5s;
}

.container i.Decorative:nth-child(1) {
    border-radius: 43% 57% 74% 26% / 44% 30% 70% 56% ;
    animation: animate 6s linear infinite;
}

.container i.Decorative:nth-child(2) {
    border-radius: 62% 38% 42% 58% / 52% 32% 62% 48%;
    animation: animate 4s linear infinite;
}

.container i.Decorative:nth-child(3) {
    border-radius: 44% 56% 42% 58% / 37% 65% 35% 63%;
    animation: animate2 10s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.container:hover i {
    border: 6px solid var(--clr);
    filter: drop-shadow(0 0 20px var(--clr));
}

.container .login
{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.container .login h1
{
    color: #fff;
}

.container .login .inputBox
{
    position: relative;
    min-width: 240px;
}

.container .login .inputBox::placeholder {
    color: white;
}
</style>W