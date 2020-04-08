import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import ivendorrepository from "../interface/ivendorrepository";
import vendermodel from "../../model/vendermodel";
import TYPES from "../../config/type"; 
import  express from "express";
import * as mongoose from 'mongoose';
import vendorschema  from "../../dbmodel/vendorschema";
import vendorModel from "../../model/vendermodel";
import globalModel  from "../../dbmodel/globalModel";
import igenericRepo  from "../interface/igenericRepository";

@injectable()
export default class vendorrepository implements ivendorrepository
{
    private _igenericRepo:igenericRepo;
    constructor(@inject(TYPES.igenericRepo) igenericRepo: igenericRepo) {
       this._igenericRepo=igenericRepo;
    }
    public savevendor(vendor:vendermodel):void
    {
        try {
            console.log("received inputs");
            console.log(vendor);
let inputObject ={ 
    vendorin :{
        vendername:vendor.vendername,
        mobilenumber : vendor.mobilenumber,
        emailid:vendor.emailid,
        password :vendor.password,
        city:vendor.city,
        state: vendor.state,
        category:vendor.category
   }
};
return this._igenericRepo.save(globalModel.vendorreg,inputObject.vendorin)
        .then((data:any) => {
            console.log("Success"+data.data);
        })
        .catch((err:any) => {
        console.log("unable to save to database");
        });
            // let vendordata = mongoose.model("vendor",vendorschema);
            // let insvendor = new vendordata({vendername : vendor.vendername,
            //     mobilenumber :vendor.mobilenumber,
            //     emailid:vendor.emailid,
            //     password :vendor.password,
            //     city:vendor.city,
            //     state: vendor.state,
            //     category:vendor.category
            // });
            // insvendor.save().then((sc:any) => {
            //     console.log("saved success");
            // })
            // .catch((err:any) => {
            //  console.log("unable to save to database");
            //  });
 
 
        } catch (error) {
            
        } 
    }
    public getRegistredvendorById(vendorkey:string):any
    {
        try {
            let mvendor =new vendermodel();

        let  searchCriteria ={"emailid":vendorkey.trim()};
        // console.log(searchCriteria);
         return this._igenericRepo.getSingleData(globalModel.vendorreg,searchCriteria)
         .then((v:any)=>{
            mvendor.vendername =v.vendername;
            mvendor.emailid =v.emailid;
            mvendor.mobilenumber=v.mobilenumber;
            mvendor.city=v.city;
            mvendor.state=v.state;
            mvendor.category=v.category;
            // console.log(mvendor);
            return mvendor;
        }).catch((err:any) => {
            console.error(err)
          });
        } catch (error) {
            throw error;
        }
    } 
    public getallRegistredvendors():any
    {
        try {
            return this._igenericRepo.get(globalModel.vendorreg)
            .then((businesses:any) => {
             let vendorlistModel= Array<vendermodel>();
                  businesses.map((element:any,i:number) => {
                 let vendor =new vendermodel();
                 vendor.vendername=element.vendername,
                 vendor.mobilenumber =element.mobilenumber,
                 vendor.emailid=element.emailid,
                 vendor.password =element.password,
                 vendor.city=element.city,
                 vendor.state= element.state,
                 vendor.category=vendor.category
                 vendorlistModel.push(vendor);
                });
                
                  return vendorlistModel;
   })
   .catch((err:any) => {
     console.error(err)
   })
            // let vendordata = mongoose.model("vendor",vendorschema);
            // const mongodb = require("mongodb");
            // return vendordata.find()
            //            .then(businesses => {
            //             let vendmodel= Array<vendorModel>();
            //                  businesses.map((element:any,i:number) => {
            //                     let mvendor =new vendermodel();
            //                     mvendor.id=element._id;
            //                     mvendor.vendername =element.vendername;
            //                     mvendor.emailid =element.emailid;
            //                     mvendor.mobilenumber=element.mobilenumber;
            //                     mvendor.city=element.city;
            //                     mvendor.password=element.password;
            //                     mvendor.state=element.state;
            //                     mvendor.category=element.category;
            //                     vendmodel.push(mvendor);
            //                });
                           
            //                return vendmodel;
            //   })
            //   .catch(err => {
            //     console.error(err)
            //   })
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
}