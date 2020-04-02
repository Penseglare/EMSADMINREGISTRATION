import mongoose from "mongoose";

const Schema = mongoose.Schema;
const RegAddressSchema = new Schema({
    id: {
        type: Number            
    },
    place: {
        type: String,
        required: 'Enter a  name'
    },
    street: {
        type: String,
        required: 'Enter a code'
    },
    district: {
        type: String,
        required: 'Enter a code'
    },
    pin: {
        type: String,
        required: 'Enter a code'
    },
    registaration:{
        type:Schema.Types.ObjectId,ref:"registration"
    }
}
);


export default RegAddressSchema;