import SessionModel from "../model/session.model.js";
import { decodeTokenByJwt, generateTokenByJwt } from "../utils/utils.jwt.js";
import lodash from "lodash";
import { findUserService } from "./user.service.js";

const { get } = lodash;

export const createSessionService = async (userId) => {
  try {
    const session = await SessionModel.create({ user: userId });
    return session.toJSON();
  } catch (error) {
    console.log(error);
    throw new Error("Invalid Session");
  }
}

export function createAccessToken({
  user,
  session,
}) {
  const accessToken = generateTokenByJwt(
    { ...user, session: session._id },
    {
      expiresIn: 5 * 60
    }
  );
  return accessToken;
}

export const reIssueAccessToken = async (refreshToken) => {
  try {
    const decode = await decodeTokenByJwt(refreshToken);
    if (!decode || (!get('_id', decode))) return false;
    const session = await SessionModel.findById(get("_id", decode));
    if (!session || !session.valid) return false;
    const user = await findUserService({ _id: session.user });
    if (!user) return false;
    const accessToken = createAccessToken(user, session);
    return accessToken;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const updateSessionService = async (query, update) => {
  try {
    const result = await SessionModel.updateOne(query, update);
    return result;
  } catch (error) {
    console.error("Error updating session:", error);
    throw new Error("Failed to update session");
  }
};

export const findSession = async (query) => {
  try {
    const result = await SessionModel.find(query);
    return result;
  } catch (error) {
    console.error("Error finding session:", error);
    throw new Error("Failed to find session");
  }
};

