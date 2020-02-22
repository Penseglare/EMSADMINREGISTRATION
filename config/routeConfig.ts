import  express from "express";
import  containerconfig from "./containerconfig";
import TYPES from "./type";
import {Request, Response} from "express";
//import registrationController from "../controller/implementation/registrationController";
import iregistrationController from "../controller/interface/iregistrationController";
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
    route.put("/api/updateuser/:id",registration.updateuser);
    // route.post("/api/postRegisteredUser",this.registrationController.getRegistredUserBy);
    // route.post("/api/updateRegisteredUser",this.registrationController.getRegistredUserBy);
}
}