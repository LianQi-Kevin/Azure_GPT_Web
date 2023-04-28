<template>
  <h1>GPT4</h1>
  <div class="container">
      <el-button type="primary" @click="show_cookie">show cookie</el-button>
      <el-button type="primary" @click="remove_cookie">remove cookie</el-button>
      <el-button type="primary" @click="show_localStorage">show localStorage</el-button>
  </div>
</template>

<script>
import {getLocalStorage} from "../storageUtils/localStorage.js";
import {getCookie, removeCookie} from "../storageUtils/cookies.js";
import {ElMessage} from "element-plus";

export default {
    name: "Chat",
    methods: {
        show_cookie(){
            ElMessage.success(getCookie("jwt_token"))
        },
        remove_cookie(){
            removeCookie("jwt_token")
        },
        show_localStorage(){
            const item = getLocalStorage("refresh_token")
            if (item !== null){
                ElMessage.success(getLocalStorage("refresh_token"))
            } else {
                ElMessage.error("item null")
            }
        }
    }
}
</script>

<style scoped>

</style>