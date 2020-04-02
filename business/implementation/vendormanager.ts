import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import ivendorManager from "../interface/ivendorManager";
// import registrationRepository from "../../data/implementation/registrationRepository";
import ivendorrepository from "../../data/interface/ivendorrepository";
import vendorModel from "../../model/vendermodel"; 
@injectable()
export default class vendorManager implements ivendorManager
{
    public async savevendor(vendor:any):Promise<void>
    {
        try {
            let registrationRepositorydata  = containerconfig.get<ivendorrepository>(TYPES.ivendorrepo);
            let vendorm = new vendorModel();
            vendorm.vendername = vendor.vendername;
            vendorm.emailid =vendor.emailid;
            vendorm.mobilenumber =vendor.mobilenumber;
            vendorm.password=vendor.password;
            vendorm.city=vendor.city;
            vendorm.state=vendor.state;
            vendorm.category=vendor.category;
            console.log(vendor);
            let data =await registrationRepositorydata.savevendor(vendorm);
        } catch (error) {
    
        } 
    }
    public async getRegistredvendorById(vendorkey:string): Promise<any>
    {

        try {
           // console.log('ghdghghd');
            //console.log(vendorkey);
            let vendorRepositorydata  = containerconfig.get<ivendorrepository>(TYPES.ivendorrepo);
            let data =await vendorRepositorydata.getRegistredvendorById(vendorkey);
            // console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
    public async getallRegistredvendors(): Promise<any>
    {
        try {
            let vendorRepositorydata  = containerconfig.get<ivendorrepository>(TYPES.ivendorrepo);
            let data =await vendorRepositorydata.getallRegistredvendors();
            return data;
            
        } catch (error) {
            throw error;
        }
    }
}