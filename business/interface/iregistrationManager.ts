import registrationModel from "../../model/registrationModel"; 

export default interface iregistrationManager
{
    getRegistredUserBy():any;   
    getRegistredUserById(pkId:string):any;
    deleteuser(pkId:string):any;
    saveUser(registration:any):any
    updateuser(registration:any,id:string):any;
}