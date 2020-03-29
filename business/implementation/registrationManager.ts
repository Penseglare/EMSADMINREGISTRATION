import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iregistrationManager from "../interface/iregistrationManager";
// import registrationRepository from "../../data/implementation/registrationRepository";
import iregistrationRepository from "../../data/interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel"; 

// import supertest from "supertest";


@injectable()
export default class registrationManager implements iregistrationManager
{
    private _iregistrationRepo:iregistrationRepository;
    constructor(@inject(TYPES.iregistrationrepo) iregistrationRepo:iregistrationRepository)
     {
        this._iregistrationRepo = iregistrationRepo;
    }

    public async getRegistredUserBy():Promise<any>
    {

        try {
            // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data = await this._iregistrationRepo.getRegistredUserBy();
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async getRegistredUserById(pkId:string): Promise<any>
    {

        try {
            // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data =await this._iregistrationRepo.getRegistredUserById(pkId);
            // console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
    public async deleteuser(pkId:string): Promise<any>
    {

        try {
            // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data =await this._iregistrationRepo.deleteuser(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async saveUser(registration:any):Promise<void>
    {
        try {
            // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let reg = new registrationModel();
            reg.name = registration._name;
            reg.code =registration._code;
            reg.id =registration._id;
            console.log(reg);
            let data =await this._iregistrationRepo.saveUser(reg);
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
            // alert("HI Mahnnn");
            // let registrationRepositorydata= containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
            let data = await this._iregistrationRepo.getRegistredUserBy();
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
        // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
        let reg = new registrationModel();
        reg.name = registration._name;
        reg.code =registration._code;
        reg.id =registration._id;
        console.log(reg);
        let data =await this._iregistrationRepo.updateuser(reg,id);
    } catch (error) {

    }
}
  public async getbyvalue(id:number):Promise<any>
  {
    try {
        // let registrationRepositorydata  = containerconfig.get<iregistrationRepository>(TYPES.iregistrationrepo);
        let data =await this._iregistrationRepo.getbyvalue(id);
        //console.log(data);
        return data;
        
    } catch (error) {
        throw error;
    }
  }

}
