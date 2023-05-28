import md5 from "md5";

export default class Utils {
    static hashMd5Salt = (text, salt = "") => {
        return md5(`TRRBRUyrwUpm8dk5waHNHBfQuuFjM9BjG5N5JoMnCQhZofxRWMxB3fvS11I96zf2${text}${salt}`);
    }
}