import registrationModel from "../../model/registrationModel";

export default interface iregistrationRepository
{
    getRegistredUserBy():any;
    getRegistredUserById(pkId:string):any;
    deleteuser(pkId:string):any;
    saveUser(registration:registrationModel):void;
    signupuser(registration:registrationModel):any;
    updateuser(registration:registrationModel,id:string):any;
    getbyvalue(id:number):any;
}