import axios from "axios";

class AccountAxios{
    constructor() {
        this.localAxios = axios.create({
            baseURL: "http://127.0.0.1:5000",
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000
        })
    }
    login(username, password){
        let config = {method: "POST", url: "/login",
            data: JSON.stringify({username: username, password: password})}
        return this.localAxios(config)
    }

}


export default AccountAxios