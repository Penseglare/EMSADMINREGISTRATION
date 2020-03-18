import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iuserManager from "../interface/iuserManager";
// import registrationRepository from "../../data/implementation/registrationRepository";
import iuserRepository from "../../data/interface/iuserRepository";
import userModel from "../../model/userModel"; 


import mongoose from 'mongoose';
import  UserSchema  from '../../dbmodel/userSchema';


@injectable()
export default class userManager implements iuserManager
{

    public async getRegistredUserBy():Promise<any>
    {

        try {
            let userRepositorydata  = containerconfig.get<iuserRepository>(TYPES.iuserrepo);
            let data = await userRepositorydata.getRegistredUserBy();
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async getRegistredUserById(pkId:string): Promise<any>
    {

        try {
            let userRepositorydata  = containerconfig.get<iuserRepository>(TYPES.iuserrepo);
            let data =await userRepositorydata.getRegistredUserById(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
    public async deleteuser(pkId:string): Promise<any>
    {

        try {
            let userRepositorydata  = containerconfig.get<iuserRepository>(TYPES.iuserrepo);
            let data =await userRepositorydata.deleteuser(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async saveUser(user:any):Promise<void>
    {
        try {
            let userRepositorydata  = containerconfig.get<iuserRepository>(TYPES.iuserrepo);
            let reg = new userModel();
            reg.username = user._username;
            reg.address =user._address;
            reg.userid =user._userid;
            reg.password=user._password;
            reg.confirmpassword=user._confirmpassword;
            console.log(reg);
            let data =await userRepositorydata.saveUser(reg);
        } catch (error) {
    
        }
    }

    // public saveUser(registrationModel: registrationModel):void
    // {
    //    let regnn = new RegistrationSchema();
    //     const regn = new mongoose.model('registration',RegistrationSchema);
    //       registrationModel.code
    // }
public async updateuser(user:any,userid:string): Promise<any>{
    try {
        let userRepositorydata  = containerconfig.get<iuserRepository>(TYPES.iuserrepo);
        let reg = new userModel();
        reg.username = user._username;
        reg.address =user._address;
        reg.userid =user._userid;
        reg.password=user._password;
        reg.confirmpassword=user._confirmpassword;
        console.log(reg);
        let data =await userRepositorydata.updateuser(reg,userid);
    } catch (error) {

    }
}
  

}