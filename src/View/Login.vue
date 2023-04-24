<template>
    <div id="login">
        <el-form :model="loginForm" label-width="100px">
            <el-form-item label="Username" prop="username">
                <el-input type="text" placeholder="Username" v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input type="password" placeholder="Password" show-password v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button @click="loginSubmit">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ElMessage} from "element-plus";

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
            this.$axios({method: "POST", url: "/login", data: JSON.stringify(this.loginForm)}
            ).then(function (response) {
                console.log(response.data);
                ElMessage.success("Success Login");
                // todo: 路由仍有错误
                this.$router.push('/home')
            }).catch(function (error) {
                ElMessage.error(error);
            });
        }
    }
}
</script>

<style>

</style>