import axios from "axios";

export default class Web {

    static server_name = `http://87.242.94.151:443`

    static require = (method, params) => {
        return axios(`${Web.server_name}/api/admin`, {
            method: 'post',
            headers: {
                Cookie: document.cookie
            },
            withCredentials:true,
            data: {
                method: method,
                params: params
            }})
    }

    static getInfo = () => {
        return Web.require("getinfo");
    }

    static sendAuth = (login, password) => {
        return Web.require("auth", {
            login: login,
            password: password
        })
    }
}