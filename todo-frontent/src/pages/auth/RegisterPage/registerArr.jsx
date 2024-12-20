import EmailIc from "../../../imgIc/emailIc";
import LockIc from "../../../imgIc/LockIc";

const registerArr = [
    { type: "text", placeholder: "Enter your Email", name: "email", icon: <EmailIc /> },
    { type: "text", placeholder: "Enter your Name", name: "username", icon: <LockIc /> },
    { type: "password", placeholder: "Enter your password", name: "password", icon: <LockIc /> },
    { type: "password", placeholder: "Enter your confirm password", name: "confirmPassword", icon: <LockIc /> }
];

export default registerArr;