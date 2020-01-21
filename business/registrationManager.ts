import registrationRepository from "../data/registrationRepository";
import registrationModel from "../model/registrationModel"; 

import mongoose from 'mongoose';
import  RegistrationSchema  from '../dbmodel/registrationSchema';

export default class registrationManager
{

    public getRegistredUserBy():any
    {

        try {
            let registrationRepositorydata  = new registrationRepository();
            return registrationRepositorydata.getRegistredUserBy();
            
        } catch (error) {
            throw error;
        }
    } 
    public getRegistredUserById(id:number):any
    {

        try {
            let registrationRepositorydata  = new registrationRepository();
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