import axios from "axios";

class AccountAxios{
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
}


export default AccountAxios