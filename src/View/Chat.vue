<template>
    <div class="container">
        <div class="header">
            header
        </div>
        <div class="chat">
            chat
        </div>
        <div class="input">
            <div class="centerInput">
                <form class="typeArea">
                    <textarea style="resize: none;"></textarea>
                    <button>
                        <img src="../assets/uploader.svg" alt="upload button" />
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import uploaderSVG from '../assets/uploader.svg'
export default {
    data() {
        return {
            inputArea: "",
        }
    },
    methods: {
    },
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
    grid-template-areas: "header"
                         "chat"
                         "input";
    grid-template-columns: 1fr;
    grid-template-rows: 2.5rem 1fr 100px;
}

.container > div {
    border: 1px dashed #888;
}

.header {
    grid-area: header;
}

.chat {
    grid-area: chat;
}
.input {
    grid-area: input;
}

form.typeArea {
    display: flex;
}

div.centerInput {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>