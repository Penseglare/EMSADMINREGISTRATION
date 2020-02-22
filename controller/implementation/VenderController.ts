import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
import  containerconfig from "../../config/containerconfig";
import vendermodel from "../../model/vendermodel"
import ivenderController from "../interface/ivenderController";
import ivendormanager from "../../business/interface/ivendorManager";

@injectable()
export default class VenderController implements ivenderController
{
   
public async savevendor(req: Request, res: Response):Promise<any> {
    try{
        let vendormanager = containerconfig.get<ivendormanager>(TYPES.ivendorbusiness);
        console.log(req.body);
            let data = await vendormanager.savevendor(req.body);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
    }
    catch (error) {
    throw error;
    }
}
    
}