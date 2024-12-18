import lodash from "lodash";
import UserModel from "../model/user.model.js";

const { omit } = lodash;

export async function createUserService(user_data) {
    try {
        const existingUser = await UserModel.findOne({ email: user_data.email });
        if (existingUser) {
            throw new Error("This email already Exist");
        }
        return await UserModel.create(user_data);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function validatePasswordLoginService({ email, password }) {
    const user = await UserModel.find({ email: email });
    if (!user) return false;
    console.log(user);
    const isValid = await user.comparePassword(password);
    if (!isValid) return false;
    return omit(user.toJSON(), "password");
}

export async function findUserService(query) {
    return User.findOne(query).lean();
}