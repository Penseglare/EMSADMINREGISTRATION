import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
 import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iregistrationController from "../interface/iregistrationController";
//import registrationManager from "../../business/implementation/registrationManager";
import iregistrationManager from "../../business/interface/iregistrationManager";
//import registrationModel from "../../model/registrationModel";

@injectable()
export default class registrationController implements iregistrationController
{
        constructor() {
    }
   
public async getRegistredUserBy(req: Request, res: Response):Promise<any>
{
try{
    //console.log("controller");
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        let data = await registrationManagers.getRegistredUserBy();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async getRegistredUserById(req: Request, res: Response): Promise<any>
{
try{
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    let id = String(req.params.id);
    console.log(id);
        let data = await registrationManagers.getRegistredUserById(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async deleteuser(req: Request, res: Response): Promise<any>
{
try{
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    let id = String(req.params.id);
    //console.log(id);
        let data = await registrationManagers.deleteuser(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async saveuser(req: Request, res: Response): Promise<any>
{
try{
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    console.log(req.body);
        let data = await registrationManagers.saveUser(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
} 
catch(error)
{
    throw error;
}
}
public user():any{
    try {
        let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        registrationManagers.user();
    } catch (error) {
        
    }
    return null;
}
}
