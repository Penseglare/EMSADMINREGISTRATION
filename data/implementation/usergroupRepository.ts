import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import iusergroupRepository from "../interface/iusergroupRepository";
import usergroupModel from "../../model/usergroupModel";
import  express from "express";
import * as mongoose from 'mongoose';
//import registrationSchema  from "../../dbmodel/registrationSchema";
import usergroup_Schema from "../../dbmodel/usergroupSchema";
@injectable()
export default class usergroupRepository implements iusergroupRepository
{
    public getUserGroup():any
    {
        try {
           let usergroup = mongoose.model("usergroup",usergroup_Schema);
            return usergroup.find()
                       .then(businesses => {
                           console.log(businesses);
                        let usergroup_Model= Array<usergroupModel>();
                             businesses.map((element:any,i:number) => {
                            let re =new usergroupModel();
                            re.groupid = element._groupid,
                            re.groupname=element.groupname;
                            re.groupdescription=element.groupdescription;
                            re.exportreport=element.exportreport;
                            usergroup_Model.push(re);
                           });
                             return  usergroup_Model;
              })
              .catch(err => {
                console.error(err)
              })
        }
         catch (error) {
            throw error;
        }
    } 
    public getUserGroupById(pkId:string):any
    {
        try {
            let usergroup = mongoose.model("usergroup",usergroup_Schema);
            const mongodb = require("mongodb");
            return usergroup.findById({"_id":mongodb.ObjectId(pkId)})
            .then((v:any)=>{
                let user =new usergroupModel();
                user.groupid = v._groupid,
                user.groupname=v.groupname;user.groupdescription=v.groupdescription;
                user.exportreport=v.exportreport;
                console.log(user);
                return user;
            }).catch(err => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
    public deleteUserGroup(pkId:string):any
    {
        try {
            let usergroup = mongoose.model("usergroup",usergroup_Schema);
            const mongodb = require("mongodb");
            return usergroup.findByIdAndRemove({"_id":mongodb.ObjectId(pkId)})
            //.find()
            .then(businesses => {
             let usergroup_Model= Array<usergroupModel>();
  
                  return usergroup_Model;
            }).catch(err => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
    public saveUserGroup(usergroup:usergroupModel):void
    {
        try {
            let user_group = mongoose.model("usergroup",usergroup_Schema);
            let usergroup_ = new user_group({groupid:usergroup.groupid,groupname : usergroup.groupname,groupdescription:usergroup.groupdescription,exportreport:usergroup.exportreport});
            usergroup_.save().then((sc:any) => {
                console.log("Save successfull");
            })
            .catch((err:any) => {
             console.log("unable to save to database");
             });
 
 
        } catch (error) {
            
        } 
    }
  
    public updateUserGroup(usergroup:usergroupModel,id:string):any
    {
        try {
            let user_group = mongoose.model("usergroup",usergroup_Schema);
            let usergroup_ = new user_group({groupid:usergroup.groupid,groupname : usergroup.groupname,groupdescription:usergroup.groupdescription,exportreport:usergroup.exportreport});
            const mongodb = require("mongodb");
          return  user_group.findById({"_groupid":mongodb.ObjectId(id)},(err:any,data:any)=>
          {
              data.groupid=usergroup.groupid;data.groupname= usergroup.groupname;data.groupdescription=usergroup.groupdescription;data.exportreport=usergroup.exportreport;
              console.log(data)
              data.save().then((sc:any) => {
                  console.log(sc);
                console.log("Updation successfull");
            })
            .catch((err:any) => {
             console.log("unable to update to database");
             })
          });
        } catch (error) {
            
        } 
    }

}