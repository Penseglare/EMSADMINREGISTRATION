import mongoose,{Schema,Document} from "mongoose";

export default class dbConfig
{
    public dbInitialization(mongoose: any,url:string):void{
        mongoose.Promise = global.Promise;
        mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true}, (err:any) => {
        if (!err) {
        console.log('Successfully Established Connection with MongoDB');
        }
        else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
        }
        });
        //mongoose.close();
    } 
}


//export default mongoose;