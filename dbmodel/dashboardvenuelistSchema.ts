import mongoose from "mongoose";
  
const Schema = mongoose.Schema;
const VenueListSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a  name'
    },
    place: {
        type: String,
        required: 'Enter a place'
    },
    address: {
        type: String,
        required: 'Enter a  address'
    },
    location: {
        type: String,
        required: 'Enter a address'
    }
}
);


//export default mongoose.model<IRegistrationSchema>('registration',RegistrationSchema);
export default VenueListSchema;
//export default mongoose.model('registration',RegistrationSchema);
