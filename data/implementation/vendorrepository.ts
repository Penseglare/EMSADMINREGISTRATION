import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import ivendorrepository from "../interface/ivendorrepository";
import vendermodel from "../../model/vendermodel";
import  express from "express";
import * as mongoose from 'mongoose';
import vendorschema  from "../../dbmodel/vendorschema";

@injectable()
export default class vendorrepository implements ivendorrepository
{
    public savevendor(vendor:vendermodel):void
    {
        try {
            let vendordata = mongoose.model("vendor",vendorschema);
            let insvendor = new vendordata({id:vendor.id,name : vendor.vendername,code:vendor.emailid});
           // console.log(vendor);
            insvendor.save().then((sc:any) => {
                console.log("saved success");
            })
            .catch((err:any) => {
             console.log("unable to save to database");
             });
 
 
        } catch (error) {
            
        } 
    }
}