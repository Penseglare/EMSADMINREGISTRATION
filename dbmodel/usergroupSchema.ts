import mongoose from "mongoose";
// import {Document} from "mongoose";

// export interface IRegistrationSchema extends Document {
//     id: number;
//     name: string;
//     code: string;
//   }
  
const Schema = mongoose.Schema;
const UsergroupSchema = new Schema({
    usergroupid: {
        type: Number            
    },
    groupname: {
        type: String,
       // required: 'Enter user group name'
    },
    groupdescription: {
        type: String,
        required: 'Enter user group description'
    },
    exportreport: {
        type: String,
        //required: 'Enter user group description'
    }
}
);


//export default mongoose.model<IRegistrationSchema>('registration',RegistrationSchema);
export default UsergroupSchema;
//export default mongoose.model('registration',RegistrationSchema);
