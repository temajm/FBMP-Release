import Admin from "../../../components/Admin.js";

export default class Auth {
    static name = "auth";

    static run = async(req, res) => {
        console.log(req.body["params"])
        if(req.body?.params?.login?.length == null){
            return {
                "status": "error",
                "text": "Введите логин!"
            }
        }
        if(req.body?.params?.password?.length == null){
            return {
                "status": "error",
                "text": "Введите пароль!"
            }
        }

        const result = await Admin.auth(req.body.params.login, req.body.params.password);
        if(result == null){
            return {
                "status": "error",
                "text": "Вы неправильно ввели логин или пароль!"
            }
        }

        const hash = result.generateLoginHashData();
        res.cookie("admin_payload", hash.payload);
        res.cookie("admin_protect", hash.protection);

        return {
            "status": "ok",
            "admin_payload": hash.payload,
            "admin_protect": hash.protection
        }
    }
}