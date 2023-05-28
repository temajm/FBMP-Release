import Admin from "../../../components/Admin.js";

export default class Getinfo {
    static name = "getinfo";

    static run = async(req, res) => {

        const result = await Admin.authByHash(req.cookies["admin_payload"], req.cookies["admin_protect"]);
        if(result == null){
            return {
                "status": "error",
                "text": "Вы не прошли авторизацию!"
            }
        }

        return {
            "status": "ok",
            "info": {
                "first_name": result.getDataBaseData().first_name,
                "last_name": result.getDataBaseData().last_name
            }
        }
    }
}