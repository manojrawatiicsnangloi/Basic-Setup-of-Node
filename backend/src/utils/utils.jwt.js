import jwt from "jsonwebtoken";

const generateTokenByJwt = async (data, option = undefined) => {
    return jwt.sign(data, 'private_key', option);
}

const decodeTokenByJwt = async (token) => {
    try {
        const decode = jwt.verify(token);
        return {
            expired: false,
            valid: true,
            decode
        }
    } catch (error) {
        return {
            expired: true,
            valid: false,
            decode: null
        }
    }
}

export { generateTokenByJwt, decodeTokenByJwt };