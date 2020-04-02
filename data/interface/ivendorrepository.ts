import vendorModel from "../../model/vendermodel";

export default interface ivendorrepository
{
    savevendor(vendor:vendorModel):void
    getRegistredvendorById(vendorkey:string):any;
    getallRegistredvendors():any;
}