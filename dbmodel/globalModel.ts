import * as mongoose from 'mongoose';
import registrationSchema  from "./registrationSchema";
import LoginSchema  from "./loginSchema";
const globalModel={
    regn: mongoose.model("registration",registrationSchema),
    login:mongoose.model("Signup",LoginSchema),

} 
export default globalModel;