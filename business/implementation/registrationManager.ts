import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iregistrationManager from "../interface/iregistrationManager";
// import registrationRepository from "../../data/implementation/registrationRepository";
import iregistrationRepository from "../../data/interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel"; 

import mongoose from 'mongoose';
import  RegistrationSchema  from '../../dbmodel/registrationSchema';

@injectable()
export default class registrationManager implements iregistrationManager
{

    public getRegistredUserBy():any
    {

        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            return registrationRepositorydata.getRegistredUserBy();
            
        } catch (error) {
            throw error;
        }
    } 
    public getRegistredUserById(id:number):any
    {

        try {
            let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            return registrationRepositorydata.getRegistredUserById(id);
            
        } catch (error) {
            throw error;
        }
    } 

    // public saveUser(registrationModel: registrationModel):void
    // {
    //    let regnn = new RegistrationSchema();
    //     const regn = new mongoose.model('registration',RegistrationSchema);
    //       registrationModel.code
    // }
}