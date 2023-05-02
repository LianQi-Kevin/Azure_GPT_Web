<template>
    <div class="container">
        <div class="list">list</div>
        <div class="chat">chat</div>
        <div class="input">
            <el-button>Clean Chat</el-button>
            <el-input type="text" v-model="inputArea" clearable rows="4" show-word-limit autofocus>
                <template #append>
                    <el-button>Send</el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputArea: "",
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "list chat"
  "list input";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr 100px;
}
.container > div {
    border: 1px dashed #888;
}

.list {
    grid-area: list;
}
.chat {
    grid-area: chat;
}
.input {
    grid-area: input;
    display: flex;
}
</style>