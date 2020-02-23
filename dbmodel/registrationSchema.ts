import mongoose from "mongoose";
// import {Document} from "mongoose";

// export interface IRegistrationSchema extends Document {
//     id: number;
//     name: string;
//     code: string;
//   }
  
const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
    id: {
        type: Number            
    },
    name: {
        type: String,
        required: 'Enter a  name'
    },
    code: {
        type: String,
        required: 'Enter a code'
    }
}
);


//export default mongoose.model<IRegistrationSchema>('registration',RegistrationSchema);
export default RegistrationSchema;
//export default mongoose.model('registration',RegistrationSchema);
