import lodash from "lodash";
import { decodeTokenByJwt } from "../utils/utils.jwt.js";


const { get } = lodash;

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
  next();
}

export default deserializeUser;