import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iusergroupManager from "../interface/iusergroupManager";
import iregistrationRepository from "../../data/interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel"; 


import mongoose from 'mongoose';
import  UsergroupSchema  from '../../dbmodel/UsergroupSchema';


@injectable()
export default class usergroupManager implements iusergroupManager
{

    public async getRegistredUserBy():Promise<any>
    {

        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data = await registrationRepositorydata.getRegistredUserBy();
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async getRegistredUserById(pkId:string): Promise<any>
    {

        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data =await registrationRepositorydata.getRegistredUserById(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
    public async deleteUserGroup(pkId:string): Promise<any>
    {

        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data =await registrationRepositorydata.deleteuser(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async saveUserGroup(registration:any):Promise<void>
    {
        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let reg = new registrationModel();
            reg.name = registration._name;
            reg.code =registration._code;
            reg.id =registration._id;
            console.log(reg);
            let data =await registrationRepositorydata.saveUser(reg);
        } catch (error) {
    
        }
    }

    public user():any{
    return null;
    }
    public async signupuser():Promise<any>
    {
        try
        {
            alert("HI Mahnnn");
            let registrationRepositorydata= containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data = await registrationRepositorydata.getRegistredUserBy();
            return data;
            //console.log(reg);
            //let data=await registrationRepositorydata.signupuser(reg);
        }
        catch(error)
        {

        }
    }


    // public saveUser(registrationModel: registrationModel):void
    // {
    //    let regnn = new RegistrationSchema();
    //     const regn = new mongoose.model('registration',RegistrationSchema);
    //       registrationModel.code
    // }
public async updateuser(registration:any,id:string): Promise<any>{
    try {
        let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
        let reg = new registrationModel();
        reg.name = registration._name;
        reg.code =registration._code;
        reg.id =registration._id;
        console.log(reg);
        let data =await registrationRepositorydata.updateuser(reg,id);
    } catch (error) {

    }
}
  

}