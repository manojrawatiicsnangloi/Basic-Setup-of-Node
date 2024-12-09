import SessionModel from "../model/session.model"
import { generateTokenByJwt } from "../utils/utils.jwt";


const createSessionService = async (userId)=>{
    try {
        const session = await SessionModel.create({user : userId});
        return session.toJSON();
    } catch (error) {
        console.log(error);
        throw new Error("Invalid Session");
    }
}

  
function createAccessToken({
    user,
    session,
  }) {
    const accessToken = generateTokenByJwt(
      { ...user, session: session._id },
      { 
        expiresIn:  5 * 60
      }
    );
    return accessToken;
  }

const createRefreshToken = (session)=>{
    
}

  