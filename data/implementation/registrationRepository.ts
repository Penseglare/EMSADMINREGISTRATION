import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import iregistrationRepository from "../interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel";
import  express from "express";
import * as mongoose from 'mongoose';
import registrationSchema  from "../../dbmodel/registrationSchema";
import LoginSchema  from "../../dbmodel/loginSchema";
@injectable()
export default class registrationRepository implements iregistrationRepository
{
    public getRegistredUserBy():any
    {
        try {
           let regn = mongoose.model("registration",registrationSchema);
            return regn.find()
                       .then(businesses => {
                        let regModel= Array<registrationModel>();
                             businesses.map((element:any,i:number) => {
                            let re =new registrationModel();
                            re.pkId = element._id,
                            re.id = element.id;re.name=element.name;re.code=element.code;
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
    public getRegistredUserById(pkId:string):any
    {
        try {
            let regn = mongoose.model("registration",registrationSchema);
            //pkId = "5e403b0c21c3db2c080fd267";
            const mongodb = require("mongodb");
            return regn.findById({"_id":mongodb.ObjectId(pkId)})
            .then((v:any)=>{
                let re =new registrationModel();
                re.pkId = v._id,
                re.id = v.id;re.name=v.name;re.code=v.code;
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
    public deleteuser(pkId:string):any
    {
        try {
            let regn = mongoose.model("registration",registrationSchema);
            //pkId = "5e403b0c21c3db2c080fd267";
            const mongodb = require("mongodb");
            return regn.findByIdAndRemove({"_id":mongodb.ObjectId(pkId)})
            //.find()
            .then(businesses => {
             let regModel= Array<registrationModel>();
        //  businesses.map((element:any,i:number) => {
        //          let re =new registrationModel();
        //          re.pkId = element._id,
        //          re.id = element.id;re.name=element.name;re.code=element.code;
        //          regModel.push(re);
        //         });
                //console.log(businesses);
                  return regModel;
            }).catch(err => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
    public saveUser(registration:registrationModel):void
    {
        try {
            let regn = mongoose.model("registration",registrationSchema);
            let reg = new regn({id:registration.id,name : registration.name,code:registration.code});
                     reg.save().then((sc:any) => {
                console.log("saved success");
            })
            .catch((err:any) => {
             console.log("unable to save to database");
             });
 
 
        } catch (error) {
            
        } 
    }
    public signupuser():any
    {
        try{
            alert("repository");
            let regn=mongoose.model("Signup",LoginSchema);
           // let reg= new regn({signupId:registration.id,userid:registration.userid,password:registration.pwd});
            //const mongodb = require("mongodb");
            regn.find()
            .then(businesses => {
             let regModel= Array<registrationModel>();
                  businesses.map((element:any,i:number) => {
                    console.log("Login Successfull");
                });
            }).catch((err:any)=>{
                    console.log("Please signup for free");
                });

        }
        catch(error)
        {

        }
    }

    public updateuser(registration:registrationModel,id:string):any
    {
        try {
            let regn = mongoose.model("registration",registrationSchema);
            let reg = new regn({id:registration.id,name : registration.name,code:registration.code});
            const mongodb = require("mongodb");
          return  regn.findById({"_id":mongodb.ObjectId(id)},(err:any,data:any)=>
          {
              data.id=registration.id;data.name= registration.name;data.code=registration.code;
              console.log(data)
              data.save().then((sc:any) => {
                  console.log(sc);
                console.log("update success");
            })
            .catch((err:any) => {
             console.log("unable to update to database");
             })
          });
        } catch (error) {
            
        } 
    }

}