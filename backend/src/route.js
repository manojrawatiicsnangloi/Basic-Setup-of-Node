import { getSessionHandler, updateSessionHandler } from "./controlers/session.controlers.js";
import validateUser from "./middleware/validateUser.middleware.js";
import { userLoginSchema, userRegisterSchema } from "./schema/user.schema.js";


const routeFunc = ()=>{
    app.post('/login',validateUser(userLoginSchema), createUserSessionHandler);
    app.post('/register', validateUser(userRegisterSchema),userRegisterControler);
    app.get('/session', getSessionHandler);
    app.delete("/logout", updateSessionHandler);
}

export default routeFunc;