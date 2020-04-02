import mongoose from "mongoose";
// import {Document} from "mongoose";

// export interface IRegistrationSchema extends Document {
//     id: number;
//     name: string;
//     code: string;
//   }
  
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userid: {
        type: Number            
    },
    username: {
        type: String,
        required: 'Enter a  username'
    },
    address: {
        type: String,
        required: 'Enter a address'
    },
    password:{
        type:String,
        required:"Enter a password"
    },
    confirmpassword:{
        type:String,
        required:"Enter a confirm password"
    },
}
);


//export default mongoose.model<IRegistrationSchema>('registration',RegistrationSchema);
export default UserSchema;
//export default mongoose.model('registration',RegistrationSchema);
