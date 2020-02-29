import usergroupModel from "../../model/usergroupModel"; 

export default interface iusergroupManager
{
    getUserGroup():any;   
    getUserGroupById(pkId:string):any;
    deleteUserGroup(pkId:string):any;
    saveUserGroup(registration:any):any
    updateUserGroup(registration:any,id:string):any;

}