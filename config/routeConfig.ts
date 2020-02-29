import  express from "express";
import  containerconfig from "./containerconfig";
import TYPES from "./type";
import {Request, Response} from "express";
//import registrationController from "../controller/implementation/registrationController";
import iregistrationController from "../controller/interface/iregistrationController";
import iusergroupController from "../controller/interface/iusergroupController";
export default class routeConfig
{
    //public registrationController:registrationController=new registrationController();
public registerRoute(route:express.Application):void
{
    let registration = containerconfig.get<iregistrationController>(TYPES.iregistration);

    route.get("/api/getRegisteredUser",registration.getRegistredUserBy);
    route.get("/api/getRegisteredUserById/:id",registration.getRegistredUserById);
    route.get("/api/deleteuser/:id",registration.deleteuser);
    route.post("/api/saveuser",registration.saveuser);
    route.get("/api/signupuser",registration.signupuser);
    route.put("/api/updateuser/:id",registration.updateuser);

    // route.post("/api/postRegisteredUser",this.registrationController.getRegistredUserBy);
    // route.post("/api/updateRegisteredUser",this.registrationController.getRegistredUserBy);
}
public usergroupRoute(route:express.Application):void
{
    let usergroup = containerconfig.get<iusergroupController>(TYPES.iusergroup);

    route.get("/api/getUserGroup",usergroup.getUserGroup);
    route.get("/api/getUserGroupById/:id",usergroup.getUserGroupById);
    route.get("/api/deleteUserGroup/:id",usergroup.deleteUserGroup);
    route.post("/api/saveUserGroup",usergroup.saveUserGroup);
    route.put("/api/updateUserGroup/:id",usergroup.updateUserGroup);

}
}