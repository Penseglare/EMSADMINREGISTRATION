import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/ems_admin_registration', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});

export default mongoose;