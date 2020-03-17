import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import idashboardvenuelistManager from "../interface/idashboardvenuelistManager";
// import registrationRepository from "../../data/implementation/registrationRepository";
import idashboardvenuelistRepository from "../../data/interface/idashboardvenuelistRepository";
import dashboardvenuelistModel from "../../model/dashboardvenuelistModel"; 


import mongoose from 'mongoose';
import  VenueListSchema  from '../../dbmodel/dashboardvenuelistSchema';

@injectable()
export default class dashboardVenueListManager implements idashboardvenuelistManager
{
    public async getVenueList():Promise<any>
    {

        try {
            let idashboardvenuelistRepository  = containerconfig.get<idashboardvenuelistRepository>(TYPES.iregistrationrepo);
            let data = await idashboardvenuelistRepository.getVenueList();
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async getVenueListBySearch(searchKeyword:string): Promise<any>
    {

        try {
            let idashboardvenuelistRepository  = containerconfig.get<idashboardvenuelistRepository>(TYPES.iregistrationrepo);
            let data =await idashboardvenuelistRepository.getVenueListBySearch(searchKeyword);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
}