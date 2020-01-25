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
   
public getRegistredUserBy(req: Request, res: Response):any
{
try{
    console.log("controller");
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        let data = registrationManagers.getRegistredUserBy();
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public getRegistredUserById(req: Request, res: Response):any
{
try{
    let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    let id = Number(req.params.id);
        let data = registrationManagers.getRegistredUserById(id);
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
}
