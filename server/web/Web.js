import express from "express"
import cookieParser from "cookie-parser"
import path from "path"
import fs from "fs"
import Admin from "../components/Admin.js";
import WebMethod from "../components/WebMethod.js";
import cors from "cors"

export default class Web {

    static _application = undefined;
    static _methods = {};

    static init = async() => {
        Web._application = express();
        await Web.registerMethods();
        await Web.registerListener()
    }

    static registerMethods = async() => {
        console.log("load methods of express api")
        Web._methods = {};
        const folders = fs.readdirSync("./web/methods/", {
            withFileTypes: true
        });
        for (let i = 0; i < folders.length; i++) {
            if(!folders[i].isDirectory()) continue;
            const files = fs.readdirSync(`./web/methods/${folders[i].name}/`);
            for (let j = 0; j < files.length; j++) {
                if(files[j].indexOf(".js") !== -1){
                    const methodClass = (await import(`./methods/${folders[i].name}/${files[j]}`))?.default;
                    if(methodClass?.run == null) {
                        throw new Error(`Not found method run in /web/methods/${folders[i].name}/${files[j]}!`)
                    }
                    if(methodClass?.name == null) {
                        throw new Error(`Not found method name in /web/methods/${folders[i].name}/${files[j]}!`)
                    }
                    if(Web._methods[folders[i].name] == null){
                        Web._methods[folders[i].name] = [];
                    }
                    Web._methods[folders[i].name].push(methodClass);
                }
            }
        }
    }

    static registerListener = async() => {
        Web._application.use(cors())
        Web._application.use(express.json());
        Web._application.use(cookieParser());
        Web._application.use((req, res, next) => {
            const url = req?.url?.length > 0 ? req.url.toLowerCase() : "";
            if (url.indexOf("/admin/login/") === 0) {
                console.log(req.cookies);
                if (req.cookies["admin_payload"]?.length > 0 && req.cookies["admin_protect"]?.length > 0) {
                    const validate = Admin.checkValidationLoginHash(req.cookies["admin_payload"], req.cookies["admin_protect"])
                    if (!validate) {
                        res.clearCookie("admin_payload");
                        res.clearCookie("admin_protect");
                    } else {
                        res.redirect("/admin/panel/");
                        return;
                    }
                }
            } else if (url.indexOf("/admin/panel/") === 0) {
                if (req.cookies["admin_payload"]?.length > 0 && req.cookies["admin_protect"]?.length > 0) {
                    const validate = Admin.checkValidationLoginHash(req.cookies["admin_payload"], req.cookies["admin_protect"])
                    if (!validate) {
                        res.clearCookie("admin_payload");
                        res.clearCookie("admin_protect");
                        res.redirect("/admin/login/");
                        return;
                    } else {
                        next();
                        return;
                    }
                } else {
                    res.clearCookie("admin_payload");
                    res.clearCookie("admin_protect");
                    res.redirect("/admin/login/");
                    return;
                }
            }
            next();
        });
        Web._application.use("/admin/login", express.static("app/adminlogin"))
        Web._application.use("/admin/panel", express.static("app/adminpanel"))
        Web._application.use("/", express.static("app/root"))
        const auth = await import("./methods/auth.js");
        console.log(auth.default?.run);
        for (const methodsKey in Web._methods) {
            Web._application.post(`/api/${methodsKey}`, async(req, res) => {
                if(req.body["method"] == null){
                    res.json({"response": {
                            "status": "error",
                            "text": "not found param 'method'!"
                        }})
                    return;
                }
                for (let i = 0; i < Web._methods[methodsKey].length; i++) {
                    if(Web._methods[methodsKey][i]?.name === req.body["method"]) {
                        const result = await Web._methods[methodsKey][i].run(req, res);
                        res.json({"response": {
                                ...result
                            }})
                        return;
                    }
                }

                res.json({"response": {
                        "status": "error",
                        "text": `not found method '${req.body["method"]}'!`
                    }})
            })
        }
        Web._application.listen(443);
    }
}