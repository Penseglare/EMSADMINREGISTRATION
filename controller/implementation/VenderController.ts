import {Request, Response, response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
import  containerconfig from "../../config/containerconfig";
import vendermodel from "../../model/vendermodel"
import ivenderController from "../interface/ivenderController";
import ivendormanager from "../../business/interface/ivendorManager";
import { Server } from "mongodb";

@injectable()
export default class VenderController implements ivenderController
{
   
public async savevendor(req: Request, res: Response):Promise<any> {
    try{
        //response.write("hi");
        //alert(JSON.stringify(req.body));
        let vendormanager = containerconfig.get<ivendormanager>(TYPES.ivendorbusiness);
        
        console.log(req.body);
            let data = await vendormanager.savevendor(req.body);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).send("success");
            //res.json({resp:data});
           
    }
    catch (error) {
    throw error; 
    }
}
public async getRegistredvendorById(req: Request, res: Response): Promise<any>
{
try{
    let vendorManagers = containerconfig.get<ivendormanager>(TYPES.ivendorbusiness);
    let vendorkey = String(req.params.vendorkey);
    console.log('vendorkey');

    console.log(vendorkey);
        let data = await vendorManagers.getRegistredvendorById(vendorkey);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //console.log(data);
        //res.json({data});
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
}