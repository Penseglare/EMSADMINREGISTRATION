import mongoose from "../config/dbConfig";
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
    },
    
});

export default RegistrationSchema;
