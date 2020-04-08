import * as mongoose from 'mongoose';
import registrationSchema  from "./registrationSchema";
import LoginSchema  from "./loginSchema";
import regAddressSchema  from "./regAddressSchema";
import vendorSchema from "./vendorschema";

const globalModel={
    regn: mongoose.model("registration",registrationSchema),
    login:mongoose.model("Signup",LoginSchema),
    regAddress:mongoose.model("regAddress",regAddressSchema),
    vendorreg:mongoose.model("VendorRegistration",vendorSchema)
} 
export default globalModel;