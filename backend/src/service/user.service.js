import { omit } from "lodash";
import UserModel from "../model/user.model";

export async function createUserService(user_data) {
    try {
        return await UserModel.create(user_data);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function validatePasswordLoginService({ email, password }) {
    const user = await UserModel.find({ email: email });
    if (!user) return false;
    const isValid = await user.comparePassword(password);
    if (!isValid) return false;
    return omit(user.toJSON(), "password");
}