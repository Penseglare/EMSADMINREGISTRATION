import vendormodel from "../../model/registrationModel"; 

export default interface ivendormanager
{
    savevendor(vendormodel:any):any
    getRegistredvendorById(vendorkey:string):any;
}