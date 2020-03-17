import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import iuserRepository from "../interface/iuserRepository";
import userModel from "../../model/userModel";
import  express from "express";
import * as mongoose from 'mongoose';
import userSchema  from "../../dbmodel/userSchema";
import e from "express";
//import LoginSchema  from "../../dbmodel/loginSchema";
@injectable()
export default class userRepository implements iuserRepository
{
    public getRegistredUserBy():any
    {
        try {
           let regn = mongoose.model("user",userSchema);
            return regn.find()
                       .then(businesses => {
                        let regModel= Array<userModel>();
                             businesses.map((element:any,i:number) => {
                            let re =new userModel();
                            re.userid = element._userid,
                            re.username=element.username;re.address=element.address;re.password=element.password;re.confirmpassword=element.confirmpassword;
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
    public getRegistredUserById(userid:string):any
    {
        try {
            let regn = mongoose.model("user",userSchema);
            //pkId = "5e403b0c21c3db2c080fd267";
            const mongodb = require("mongodb");
            return regn.findById({"_userid":mongodb.ObjectId(userid)})
            .then((v:any)=>{
                let re =new userModel();
                re.userid = v._userid,
                re.username=v.username;re.address=v.address;re.password=v.password;re.confirmpassword=v.confirmpassword;
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
    public deleteuser(userid:string):any
    {
        try {
            let regn = mongoose.model("registration",userSchema);
            //pkId = "5e403b0c21c3db2c080fd267";
            const mongodb = require("mongodb");
            return regn.findByIdAndRemove({"_userid":mongodb.ObjectId(userid)})
            //.find()
            .then(businesses => {
             let regModel= Array<userModel>();
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
    public saveUser(user:userModel):void
    {
        try {
            let regn = mongoose.model("user",userSchema);
            let reg = new regn({userid:user.userid,username : user.username,code:user.address,password:user.password,confirmpassword:user.confirmpassword});
                     reg.save().then((sc:any) => {
                console.log("saved success");
            })
            .catch((err:any) => {
             console.log("unable to save to database");
             });
 
 
        } catch (error) {
            
        } 
    }

    public updateuser(user:userModel, userid:string):any
    {
        try {
            let regn = mongoose.model("registration",userSchema);
            let reg = new regn({userid:user.userid,username : user.username,address:user.address,password:user.password,confirmpassword:user.confirmpassword});
            const mongodb = require("mongodb");
          return  regn.findById({"_id":mongodb.ObjectId(userid)},(err:any,data:any)=>
          {
              data.userid=user.userid;data.username= user.username;data.address=user.address;data.password=user.password;data.confirmpassword=user.confirmpassword;
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