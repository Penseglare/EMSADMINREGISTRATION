import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import iregistrationRepository from "../interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel";
import  express from "express";
import * as mongoose from 'mongoose';
import registrationSchema  from "../../dbmodel/registrationSchema";

@injectable()
export default class registrationRepository implements iregistrationRepository
{
    //public registrationModel:registrationModel = new registrationModel();
    //public registrationModelobj = [  new registrationModel( 1,"A","ab"),new registrationModel( 2,"b","abc")];
    //public regn = mongoose.model("registration",registrationSchema);
    public getRegistredUserBy():any
    {
        try {
           let regn = mongoose.model("registration",registrationSchema);
           //let reg = new regn({id:1,name : "A",code:"ab"});
        //    let sch = require("../../dbmodel/registrationSchema");
        //    let sc1 = new sch();
        //    let sc = new sch([{id:1,name : "A",code:"ab"},{id:2,name : "B",code:"abc"},{id:3,name : "c",code:"abcd"}]); 
        
        //    reg.save().then((sc:any) => {
        //        console.log("saved success");
        //    })
        //    .catch((err:any) => {
        //     console.log("unable to save to database");
        //     });
            let regModel:any;

            regn.find({},(err:any, businesses:any)=>{
                if(err){
                  console.log(err);
                }
                else {
                  
                //    businesses.map((v:any,i:number) =>{
                //    let re =new registrationModel();
                //    re.id = v.id;re.name=v.name;re.code=v.code;
                //    regModel.push(re);
                //   });
                 businesses;
                
                }
              }).then((res:any)=>{
                regModel =res;
              });
            //   console.log(regModel);
            console.log(regModel);
            return  regModel;

        } catch (error) {
            throw error;
        }
    } 
    public getRegistredUserById(id:number):registrationModel
    {
        try {
            let regn = mongoose.model("registration",registrationSchema);
            let id = "5e403b0c21c3db2c080fd267";
            let re =new registrationModel();
            const mongodb = require("mongodb");
            regn.find(mongodb.ObjectId("5e403b0c21c3db2c080fd267"),(err:any, v:any)=>{
                if(err){
                    console.log(err);
                }
                re.id = v.id;re.name=v.name;re.code=v.code;

            }); 
            return  re;

        } catch (error) {
            throw error;
        }
    } 
}