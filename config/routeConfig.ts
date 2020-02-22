import  express from "express";
import  containerconfig from "./containerconfig";
import TYPES from "./type";
import {Request, Response} from "express";
//import registrationController from "../controller/implementation/registrationController";
import iregistrationController from "../controller/interface/iregistrationController";
import ivenderController from "../controller/interface/ivenderController";
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
    // route.post("/api/postRegisteredUser",this.registrationController.getRegistredUserBy);
    // route.post("/api/updateRegisteredUser",this.registrationController.getRegistredUserBy);
}
public vendorRoute(route:express.Application):void
{
    let vendor = containerconfig.get<ivenderController>(TYPES.ivendor);
    route.post("/api/savevendor",vendor.savevendor);
}
}