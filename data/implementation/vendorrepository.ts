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
            let insvendor = new vendordata({vendername : vendor.vendername,
                mobilenumber :vendor.mobilenumber,
                emailid:vendor.emailid,
                password :vendor.password,
                city:vendor.city,
                state: vendor.state,
                category:vendor.category
            });
            insvendor.save().then((sc:any) => {0
                console.log("saved success");
            })
            .catch((err:any) => {
             console.log("unable to save to database");
             });
 
 
        } catch (error) {
            
        } 
    }
    public getRegistredvendorById(vendorkey:string):any
    {
        try {
            let vendordata = mongoose.model("vendor",vendorschema);
            //let query = { "_id": vendorkey };
            const mongodb = require("mongodb");
            // console.log(query);
            // return vendordata.find(query)
            console.log(vendorkey);
            return vendordata.findOne({"emailid": vendorkey})
            .then((v:any)=>{
                let mvendor =new vendermodel();
                mvendor.id = v.id;
                mvendor.vendername =v.vendername;
                mvendor.emailid =v.emailid;
                mvendor.mobilenumber=v.mobilenumber;
                mvendor.city=v.city;
                mvendor.state=v.state;
                mvendor.category=v.category;
                console.log(mvendor);
                return mvendor;
            }).catch(err => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
}