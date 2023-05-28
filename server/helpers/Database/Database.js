import mysql from 'mysql';

import Admin from "./API/Admin.js";

export default class Database {
    static API = {
        Admin
    }

    static mysqlc = undefined;

    static query = async(query, data = []) => {
        return await new Promise((resolve, reject) => {
            Database.mysqlc.query(query, data, (error, results, fields) => {
                if(error) return reject(error);
                resolve({results, fields});
            })
        });
    }

    static connect = async() => {
        return await new Promise((resolve, reject) => {
            Database.mysqlc = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : 'fbmp'
            });
            Database.mysqlc.connect((err) => {
                if(err) return reject(err);
                resolve(true);
            });
        })
    }
}