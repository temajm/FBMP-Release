import Database from "../helpers/Database/Database.js";
import Utils from "../helpers/Utils.js";

export default class Admin {

    _data = {}

    constructor(dbData = {}) {
        this._data = dbData;
    }

    getDataBaseData = () => {
        return this._data;
    }

    static checkValidationLoginHash = (payload, protection) => {
        if(payload?.length == null || protection?.length == null) return false;

        const payloadData = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));

        if(typeof payloadData !== "object"){
            return false;
        }
        const generateProtectionHash = Utils.hashMd5Salt(payload, payloadData["login"]);
        if(generateProtectionHash !== protection) {
            return false;
        }
        if(new Date().getTime() >= payloadData["endTime"]) {
            return false;
        }

        return payloadData;
    }

    generateLoginHashData = () => {
        const timestamp = new Date().getTime();
        const payload = {
            login: this._data?.login,
            startTime: timestamp,
            endTime: timestamp + 1000 * 60 * 60 * 24 * 30
        }

        const data = Buffer.from(JSON.stringify(payload)).toString("base64");
        const protectionHash = Utils.hashMd5Salt(data, payload.login);
        return {
            payload: data,
            protection: protectionHash
        }
    }

    static authByHash = async(payload, protect) => {
        const valid = Admin.checkValidationLoginHash(payload, protect);

        if(!valid) {
            return null;
        }

        let results = await Database.API.Admin.findAdminByLogin(valid.login);
        if(results.length !== 1){
            return null;
        }
        results = results[0];

        return new Admin(results);
    }

    static auth = async(login, password) => { // TODO: доработать
        let results = await Database.API.Admin.findAdminByLogin(login);
        if(results.length !== 1){
            return null;
        }
        results = results[0];

        const hashPassword = Utils.hashMd5Salt(password);
        if(results?.password?.length === 32 && results?.password === hashPassword) {
            return new Admin(results);
        }

        return null;
    }
}