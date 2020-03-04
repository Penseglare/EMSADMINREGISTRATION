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
            vendorm.vendername = vendor._vendername;
            vendorm.emailid =vendor._emailid;
            vendorm.mobilenumber =vendor._mobilenumber;
            vendorm.password=vendor._password;
            vendorm.city=vendor._city;
            vendorm.state=vendor._state;
            vendorm.category=vendor._category;
            console.log(vendorm);
            let data =await registrationRepositorydata.savevendor(vendorm);
        } catch (error) {
    
        }
    }
    public async getRegistredvendorById(vendorkey:string): Promise<any>
    {

        try {
            let vendorRepositorydata  = containerconfig.get<ivendorrepository>(TYPES.ivendorrepo);
            let data =await vendorRepositorydata.getRegistredvendorById(vendorkey);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
}