
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
   signupId:
   {
    type: Number
   },
    userid: {
        type: String,
        required: 'Enter UserId'
    },
    password: {
        type: String,
        required: 'Enter Password'
    }
}
);
export default LoginSchema;