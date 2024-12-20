import { createUserService } from "../service/user.service.js";

const userRegisterControler = async (req, res) => {
    try {
        const user = await createUserService(req.body);
        return res.json({"message" : "Data Send Successfully"});
    } catch (error) {
        console.log(error)
        res.json({error : `${error}`}).status(500);
    }
}

export default userRegisterControler;