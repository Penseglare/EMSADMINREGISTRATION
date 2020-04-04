import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import idashboardvenuelistRepository from "../interface/idashboardvenuelistRepository";
import dashboardvenuelistModel from "../../model/dashboardvenuelistModel";
import  express from "express";
import * as mongoose from 'mongoose';
import dashboardvenuelistSchema  from "../../dbmodel/dashboardvenuelistSchema";
@injectable()
export default class dashboadvenuelistRepository implements idashboardvenuelistRepository
{
    public getVenueList():any
    {
        try {
           let regn = mongoose.model("registration",dashboardvenuelistSchema);
            return regn.find()
                       .then(businesses => {
                        let regModel= Array<dashboardvenuelistModel>();
                             businesses.map((element:any,i:number) => {
                            let re =new dashboardvenuelistModel();
                            re.pkId = element.pkId,
                            re.name=element.name;re.place=element.place;re.address = element.address;re.location=element.location;
                            regModel.push(re);
                           });
                           
                             return regModel;
              })
              .catch(err => {
                console.error(err)
              })
        }
         catch (error) {
            throw error;
        }
    } 
    public getVenueListBySearch(SearchKeyword:string):any
    {
        try {
            let regn = mongoose.model("registration",dashboardvenuelistSchema);
            //pkId = "5e403b0c21c3db2c080fd267";
            const mongodb = require("mongodb");
            return regn.findById({"_id":mongodb.ObjectId(SearchKeyword)})
            .then((v:any)=>{
                let re =new dashboardvenuelistModel();
                re.pkId = v.pkId,
                re.name=v.name;re.place=v.place;re.address=v.address;re.location=v.location;
                console.log(re);
                return re;
            }).catch(err => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
    

}