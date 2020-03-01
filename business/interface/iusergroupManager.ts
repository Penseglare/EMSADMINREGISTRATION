import usergroupModel from "../../model/usergroupModel"; 

export default interface iusergroupManager
{
    getUserGroup():any;   
    getUserGroupById(pkId:string):any;
    deleteUserGroup(pkId:string):any;
    saveUserGroup(usergroup:any):any
    updateUserGroup(usergroup:any,id:string):any;

}