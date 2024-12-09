import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps });


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
});


UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(this.password, password)
}

const UserModel = mongoose.model("User", UserSchema);

export default UserModel
