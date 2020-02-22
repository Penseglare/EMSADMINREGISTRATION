import mongoose from "mongoose";
  
const Schema = mongoose.Schema;
const vendorSchema = new Schema({
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
export default vendorSchema;
