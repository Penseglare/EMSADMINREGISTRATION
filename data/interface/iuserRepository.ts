import userModel from "../../model/userModel";

export default interface iuserRepository
{
    getRegistredUserBy():any;
    getRegistredUserById(pkId:string):any;
    deleteuser(pkId:string):any;
    saveUser(registration:userModel):void;
    //signupuser(registration:registrationModel):any;
    updateuser(registration:userModel,id:string):any;

}