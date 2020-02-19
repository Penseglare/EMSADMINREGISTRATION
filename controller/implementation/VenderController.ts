import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
import  containerconfig from "../../config/containerconfig";
import vendermodel from "../../model/vendermodel"
import ivenderController from "../interface/ivenderController";

@injectable()
export default class VenderController implements ivenderController
{
   
public async InsertVenderdetails(req: Request, res: Response):Promise<any> {
    try{
        // res.send(req.body);
console.log(req.body);
    }
    catch (error) {
    throw error;
    }
}
    
}