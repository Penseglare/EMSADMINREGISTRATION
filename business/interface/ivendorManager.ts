import vendormodel from "../../model/vendermodel"; 

export default interface ivendormanager
{
    savevendor(vendormodel:any):any
    getRegistredvendorById(vendorkey:string):any;
}