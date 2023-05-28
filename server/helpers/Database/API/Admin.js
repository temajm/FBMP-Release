import Database from "../Database.js";

export default class Admin {
    static findAdminByLogin = async(login) => {
        const {results} = await Database.query("SELECT * FROM `admins` WHERE `login` = ?", [login]);

        return results;
    }
}