import { createUserService } from "../service/user.service.js";

const userRegisterControler = async (req, res) => {
    try {
        console.log(req.body);
        const user = await createUserService(req.body);
        
        return res.json(user.json());
    } catch (error) {
        res.json({ "error": "Internal Server Error" }).status(500);
    }
}

export default userRegisterControler;


fetch("https://munnapassword.pythonanywhere.com/contact/").then((val)=> val.json()).then((val)=> console.log(val));