


import { get } from "lodash";
import { createSessionService } from "../service/session.service";
import { validatePasswordLoginService } from "../service/user.service";
import { generateTokenByJwt } from "../utils/utils.jwt";


// User Login Handler
export const createUserSessionHandler = async (req, res) => {
    try {
        const user = await validatePasswordLoginService(req.body)
        if (!user) {
            return res.json({ "error": "Invalid Info" });
        }

        const session = await createSessionService(user._id, req.get('user-agent' || ""));

        const accessToken = generateTokenByJwt({ ...user, session: session._id }, "accessTokenPrivateKey", {
            expreIn: 5 * 60
        })
        const refrehToken = generateTokenByJwt(session, {
            expreIn: 365 * 24 * 60 * 60
        });
        return res.json({ accessToken, refrehToken });
    } catch (error) {
        res.json({ "error": error?.errors });
    }
}

// ReIssueAccessToken Controlers
export const reIssueAccessTokenSessionHandler = async (req, res) => {
    try {
        const refrehToken = get(req, "headers.x-refresh");

        if (!refrehToken) {
            return res.json({ "error": "Referesh Token is" }).status(401);
        }
        else {
            const accessToken = await reIssueAccessTokenSessionHandler(refrehToken);
            res.json({ accessToken }).status(200);
        }
    } catch (error) {
        res.json({ "error": `${error}` });
    }
}
