import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
 import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iuserController from "../interface/iuserController";
//import registrationManager from "../../business/implementation/registrationManager";
import iuserManager from "../../business/interface/iuserManager";
//import registrationModel from "../../model/registrationModel";

@injectable()
export default class userController implements iuserController
{
    user() {
        throw new Error("Method not implemented.");
    }
        constructor() {
    }
   
public async getRegistredUserBy(req: Request, res: Response):Promise<any>
{
try{
    //console.log("controller");
    let userManagers = containerconfig.get<iuserManager>(TYPES.iuserbusiness);
        let data = await userManagers.getRegistredUserBy();
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
    let userManagers = containerconfig.get<iuserManager>(TYPES.iuserbusiness);
    let id = String(req.params.id);
    console.log(id);
        let data = await userManagers.getRegistredUserById(id);
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
    let userManagers = containerconfig.get<iuserManager>(TYPES.iuserbusiness);
    let id = String(req.params.id);
    //console.log(id);
        let data = await userManagers.deleteuser(id);
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
    let userManagers = containerconfig.get<iuserManager>(TYPES.iuserbusiness);
    console.log(req.body);
        let data = await userManagers.saveUser(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
} 
catch(error)
{
    throw error;
}
}
public async updateuser(req: Request, res: Response):Promise<any>{
    try {
        let userManagers = containerconfig.get<iuserManager>(TYPES.iuserbusiness);
        let id = String(req.params.id);
         console.log(req.body);
         console.log(req.params.id);
         
        let data = await userManagers.updateuser(req.body,id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
    } catch (error) {
        
    }
}
}
