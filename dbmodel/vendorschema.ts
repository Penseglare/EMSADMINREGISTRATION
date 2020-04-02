import mongoose from "mongoose";
  
const Schema = mongoose.Schema;
const vendorSchema = new Schema({
    id: {
        type: String,
    },
    vendername: {
        type: String,
        required: 'enter vendor name'
    },
    mobilenumber: {
        type: Number,
        required: 'enter mobile number'
    },
    emailid: {
        type: String,
        required: 'enter email id'
    },
    password: {
        type: String,
        required: 'Enter account password'
    },
    city: {
        type: String,
        required: 'Enter city name'
    },
    state: {
        type: String,
        required: 'Enter state'
    },
    category: {
        type: String,
        required: 'Enter category'
    },
});
export default vendorSchema;
