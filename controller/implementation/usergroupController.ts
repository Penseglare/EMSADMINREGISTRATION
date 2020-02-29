import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
 import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iusergroupController from "../interface/iusergroupController";
import iusergroupManager from "../../business/interface/iusergroupManager";
//import usergroupModel from "../../model/usergroupModel";

@injectable()
export default class usergroupController implements iusergroupController
{
   
   
public async getUserGroup(req: Request, res: Response):Promise<any>
{
try{
    //console.log("controller");
    let usergroupManagers = containerconfig.get<iusergroupManager>(TYPES.iusergroupbusiness);
        let data = await usergroupManagers.getUserGroup();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async getUserGroupById(req: Request, res: Response): Promise<any>
{
try{
    let usergroupManagers = containerconfig.get<iusergroupManager>(TYPES.iusergroupbusiness);
    let id = String(req.params.id);
    console.log(id);
        let data = await usergroupManagers.getUserGroupById(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async deleteUserGroup(req: Request, res: Response): Promise<any>
{
try{
    let usergroupManagers = containerconfig.get<iusergroupManager>(TYPES.iusergroupbusiness);
    let id = String(req.params.id);
    //console.log(id);
        let data = await usergroupManagers.deleteUserGroup(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async saveUserGroup(req: Request, res: Response): Promise<any>
{
try{
    let usergroupManagers = containerconfig.get<iusergroupManager>(TYPES.iregistrationbusiness);
    console.log(req.body);
        let data = await usergroupManagers.saveUserGroup(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
} 
catch(error)
{
    throw error;
}
}
public async updateUserGroup(req: Request, res: Response):Promise<any>{
    try {
        let usergroupManagers = containerconfig.get<iusergroupManager>(TYPES.iregistrationbusiness);
        let id = String(req.params.id);
         console.log(req.body);
         console.log(req.params.id);
         
        let data = await usergroupManagers.updateUserGroup(req.body,id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
    } catch (error) {
        
    }
}

}
