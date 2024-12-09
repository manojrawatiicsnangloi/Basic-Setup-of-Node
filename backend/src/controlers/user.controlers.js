import { createUserService } from "../service/user.service.js";

const userRegisterControler = async (req, res)=>{
    try {
        const user = await createUserService(req.body);
        return res.json(user.json());
    } catch (error) {
        res.json({"error" : "Internal Server Error"});
    }
}

export default userRegisterControler;