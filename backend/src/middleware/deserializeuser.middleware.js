import { get } from "lodash";
import { decodeTokenByJwt } from "../utils/utils.jwt.js";
import { reIssueAccessToken } from "../service/session.service.js";

const deserializeUser = async (req, res, next) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  if (!accessToken) return next();
  const refreshToken = get(req, "headers.x-refresh");
  const { decode, expired } = decodeTokenByJwt(accessToken);
  if (decode) {
    req.user = decode;
    return next();
  }

  if (expired && refreshToken){
    const accessToken = reIssueAccessToken(refreshToken);
  }

}