import { createUserSessionHandler, getSessionHandler, updateSessionHandler } from "./controlers/session.controlers.js";
import userRegisterControler from "./controlers/user.controlers.js";
import requireUser from "./middleware/require.user.js";
import validateUser from "./middleware/validateUser.middleware.js";
import { userLoginSchema, userRegisterSchema } from "./schema/user.schema.js";


const routeFunc = ()=>{
    app.post('/login',validateUser(userLoginSchema), createUserSessionHandler);
    app.post('/register', validateUser(userRegisterSchema),  userRegisterControler);
    app.get('/session',requireUser, getSessionHandler);
    app.delete("/logout",requireUser, updateSessionHandler);
}

export default routeFunc;