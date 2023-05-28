import Database from "./helpers/Database/Database.js";
import Admin from "./components/Admin.js";
import Web from "./web/Web.js";
import axios from "axios"

(async() => {
    await Database.connect();
    console.log("Database connected")
    //const res = await Database.API.Admin.findAdminByLogin("test");
    const res = await Admin.auth("test", "test");
    const a = res.generateLoginHashData();
    const checkAdm = Admin.checkValidationLoginHash(a.payload, a.protection);
    await Web.init()

    axios.post("http://localhost:443/api/admin", {
        method: "auth",
        params: {
            login: "test",
            password: "test"
        }
    }).then((data) => {
        console.log(data.data);
    })
})()