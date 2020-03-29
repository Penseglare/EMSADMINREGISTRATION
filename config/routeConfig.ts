import  express from "express";
import  containerconfig from "./containerconfig";
import TYPES from "./type";
import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import {Request, Response} from "express";
//import registrationController from "../controller/implementation/registrationController";
import iregistrationController from "../controller/interface/iregistrationController";
import iusergroupController from "../controller/interface/iusergroupController";

import ivenderController from "../controller/interface/ivenderController";

@injectable()
export default class routeConfig
{
    //public registrationController:registrationController=new registrationController();
    // private _iregistrationController:iregistrationController;
    // constructor(@inject(TYPES.iregistration) iregistrationController:iregistrationController) {
    //   this._iregistrationController = iregistrationController;
    // }
public registerRoute(route:express.Application):void
{
    let registration = containerconfig.get<iregistrationController>(TYPES.iregistration);
    let vendor = containerconfig.get<ivenderController>(TYPES.ivendor);
    route.get("/api/getRegisteredUser",registration.getRegistredUserBy);
    route.get("/api/getRegisteredUserById/:id",registration.getRegistredUserById);
    route.get("/api/deleteuser/:id",registration.deleteuser);
    route.post("/api/saveuser",registration.saveuser);
    route.post("/api/signupuser",registration.signupuser);
    route.put("/api/updateuser/:id",registration.updateuser);

  //  #region usergroup
    let usergroup = containerconfig.get<iusergroupController>(TYPES.iusergroup);
    route.get("/api/getUserGroup",usergroup.getUserGroup);
    route.get("/api/getUserGroupById/:id",usergroup.getUserGroupById);
    route.get("/api/deleteUserGroup/:id",usergroup.deleteUserGroup);
    route.post("/api/saveUserGroup",usergroup.saveUserGroup);
    route.put("/api/updateUserGroup/:id",usergroup.updateUserGroup);
  //  #endregion

    route.post("/api/savevendor",vendor.savevendor);
    route.get("/api/getRegistredvendorById/:vendorkey",vendor.getRegistredvendorById);
    route.get("/api/getallRegistredvendors",vendor.getallRegistredvendors);
    route.get("/api/getvalue/:id",registration.getbyvalue);

    // route.post("/api/postRegisteredUser",this.registrationController.getRegistredUserBy);
    // route.post("/api/updateRegisteredUser",this.registrationController.getRegistredUserBy);
}

}