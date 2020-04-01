import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import ivendorrepository from "../interface/ivendorrepository";
import vendermodel from "../../model/vendermodel";
import  express from "express";
import * as mongoose from 'mongoose';
import vendorschema  from "../../dbmodel/vendorschema";
import vendorModel from "../../model/vendermodel";

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
            insvendor.save().then((sc:any) => {
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
            let vendordata = mongoose.model("vendors",vendorschema);
            let mvendor =new vendermodel();
            console.log(vendorkey);
            
        // return vendordata.findOne({"emailid": vendorkey.trim()})
        return vendordata.findOne({"emailid": "77@g.com"})
            .then((v:any)=>{
                console.log(v  );
               // mvendor._id = v.id;
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
    public getallRegistredvendors():any
    {
        try {
            let vendordata = mongoose.model("vendor",vendorschema);
            const mongodb = require("mongodb");
            return vendordata.find()
                       .then(businesses => {
                        let vendmodel= Array<vendorModel>();
                             businesses.map((element:any,i:number) => {
                                let mvendor =new vendermodel();
                                mvendor.id=element._id;
                                mvendor.vendername =element.vendername;
                                mvendor.emailid =element.emailid;
                                mvendor.mobilenumber=element.mobilenumber;
                                mvendor.city=element.city;
                                mvendor.password=element.password;
                                mvendor.state=element.state;
                                mvendor.category=element.category;
                                vendmodel.push(mvendor);
                           });
                           
                           return vendmodel;
              })
              .catch(err => {
                console.error(err)
              })
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
}