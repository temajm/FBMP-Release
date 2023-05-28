import axios from "axios";

export default class Web {

    static server_name = `http://87.242.94.151:443`

    static require = (method, params) => {
        return axios.post(`${Web.server_name}/api/admin`, {
            method: method,
            params: params
        })
    }

    static sendAuth = (login, password) => {
        return Web.require("auth", {
            login: login,
            password: password
        })
    }
}