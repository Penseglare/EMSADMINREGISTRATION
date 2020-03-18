import {Request, Response} from "express";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
 import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import idashboardvenuelistController from "../interface/idashboardvenuelistController";
//import registrationManager from "../../business/implementation/registrationManager";
import idashboardvenuelistManager from "../../business/interface/idashboardvenuelistManager";
//import registrationModel from "../../model/registrationModel";

@injectable()
export default class dashboardvenuelistController implements idashboardvenuelistController
{
    constructor() {
    }
    public async getVenueList(req: Request, res: Response):Promise<any>
    {
    try{
        //console.log("controller");
        let dashboardvenuelistManager = containerconfig.get<idashboardvenuelistManager>(TYPES.iregistrationbusiness);
            let data = await dashboardvenuelistManager.getVenueList();
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(data);
    } 
    catch(error)
    {
        throw error;
    }
    }
    public async getVenueListBySearch(req: Request, res: Response): Promise<any>
    {
    try{
        let dashboardvenuelistManager = containerconfig.get<idashboardvenuelistManager>(TYPES.iregistrationbusiness);
        let searchKeyword = String(req.params.searchKeyword);
        console.log(searchKeyword);
            let data = await dashboardvenuelistManager.getVenueListBySearch(searchKeyword);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
            res.send(data);
    } 
    catch(error)
    {
        throw error;
    }
    }
}