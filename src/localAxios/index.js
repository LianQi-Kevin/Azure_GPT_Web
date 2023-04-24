import axios from "axios";

const localAxios = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000
})

export default localAxios