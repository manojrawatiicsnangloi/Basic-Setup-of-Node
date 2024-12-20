import lodash from "lodash";
import { createSessionService, findSession, reIssueAccessToken, updateSessionService } from "../service/session.service.js";
import { validatePasswordLoginService } from "../service/user.service.js";
import { decodeTokenByJwt, generateTokenByJwt } from "../utils/utils.jwt.js";

const { get } = lodash;
// User Login Handler
export const createUserSessionHandler = async (req, res) => {
    try {
        const user = await validatePasswordLoginService(req.body)
        
        if (!user) {
            return res.json({ "error": "Invalid Info" }).status(400);
        }
        console.log("hii")
        const existSession = await findSession({ user: user._id });
        console.log("hii")
        
        const session = existSession.valid ? existSession : await createSessionService(user._id, req.get('user-agent' || ""));
        console.log("hii")
        
        const accessToken = generateTokenByJwt({ ...user, session: session._id }, "accessTokenPrivateKey", {
            expreIn: 5 * 60
        });
        console.log("hii");

        const refrehToken = generateTokenByJwt(session, {
            expreIn: 365 * 24 * 60 * 60
        });
        return res.json({ accessToken, refrehToken });
    } catch (error) {
        console.log(error);
        res.json({ "error": error }).status(404);
    }
}

export const getSessionHandler = async (req, res) => {
    try {
        const accessToken = get(req, "headers.authorization", "").replace(
            /^Bearer\s/,
            ""
        );
        const { decode, expired } = decodeTokenByJwt(accessToken);
        if (decode && !expired) {
            const session = await findSession({ user: decode._id });
            return res.json(session).status(200);
        }
        else {
            return res.json({ "error": "Invalid Session" }).status(400);
        }
    } catch (error) {
        return res.json({ error: `${error}` }).status(500);
    }
}


export const updateSessionHandler = async (req, res) => {
    try {
        const session = await updateSessionService({ valid: false });
        return res.json({ session });
    } catch (error) {
        console.log(error);
    }
}

// ReIssueAccessToken Controlers
export const reIssueAccessTokenSessionHandler = async (req, res) => {
    try {
        const refrehToken = get(req, "headers.x-refresh");

        if (!refrehToken) {
            return res.json({ "error": "Unauthorize user" }).status(401);
        }
        else {
            const accessToken = await reIssueAccessToken(refrehToken);
            res.json({ accessToken }).status(200);
        }
    } catch (error) {
        res.json({ "error": `${error}` });
    }
}


