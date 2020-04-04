import * as mongoose from 'mongoose';
import registrationSchema  from "./registrationSchema";
import LoginSchema  from "./loginSchema";
import regAddressSchema  from "./regAddressSchema";

const globalModel={
    regn: mongoose.model("registration",registrationSchema),
    login:mongoose.model("Signup",LoginSchema),
    regAddress:mongoose.model("regAddress",regAddressSchema),
} 
export default globalModel;