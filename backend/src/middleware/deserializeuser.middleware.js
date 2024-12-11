import { get } from "lodash";
import { decodeTokenByJwt } from "../utils/utils.jwt.js";

const deserializeUser = async (req, res, next) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  if (!accessToken) return next();
  const { 
    decode,
    expired
  } = decodeTokenByJwt(accessToken);
  
  if (decode) {
    req.user = decode;
    return next();
  }
}

export default deserializeUser;