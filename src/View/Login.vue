<template>
    <div class="login">
        <div class="login_context">
            <el-form :model="loginForm" label-width="100px" class="login_box">
                <el-form-item label="Username" prop="username">
                    <el-input type="text" placeholder="Username" v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password" placeholder="Password" show-password v-model="loginForm.password" />
                </el-form-item>
                <el-form-item class="login_btn">
                    <el-button @click="loginSubmit">Submit</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {ElMessage} from "element-plus";
import router from "../router"

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
            console.debug(JSON.stringify(this.loginForm))
            this.$axios.login(this.loginForm.username, this.loginForm.password
            ).then(function (response) {


                ElMessage.success("Success Login");
                router.push({path: '/home'})
            }).catch(function (error) {
                ElMessage.error(error);
            });
        }
    }
}
</script>

<style>
.login {
    /* 高度 */
    height: 100%;
    /* 背景色 */
    background: rgb(225, 225, 225);
}

.login_context {
    /* 宽度 */
    width: 450px;
    /* 高度 */
    height: 300px;
    /* 背景色 */
    background: #fff;
    /* 属性定位 */
    position: absolute;
    /* 属性定位，顶部占比 */
    top: 50%;
    /* 属性定位，左侧占比 */
    left: 50%;
    /* 水平垂直居中 */
    transform: translate(-50%, -50%);
    /* 四个角的圆角角度 */
    border-radius: 40px;
    /* 阴影 */
    box-shadow: 0 0 5px 2px #ddd;
}

.login_box {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 0 50px;
    /* 边框边距 */
    box-sizing: border-box;
}

.login_btn {
    /* 将对象作为弹性伸缩盒显示 */
    display: flex;
    /* 横轴方向上的对齐方式 */
    justify-content: flex-end;
}
</style>