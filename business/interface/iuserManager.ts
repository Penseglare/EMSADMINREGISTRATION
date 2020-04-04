import userModel from "../../model/userModel"; 

export default interface iuserManager
{
    getRegistredUserBy():any;   
    getRegistredUserById(pkId:string):any;
    deleteuser(pkId:string):any;
    saveUser(registration:any):any    
    updateuser(registration:any,id:string):any;

}