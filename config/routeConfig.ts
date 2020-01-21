import  express from "express";
import {Request, Response} from "express";
import registrationController from "../controller/registrationController";
export default class routeConfig
{
    public registrationController:registrationController=new registrationController();
public registerRoute(route:express.Application):void
{
    route.get("/api/getRegisteredUser",this.registrationController.getRegistredUserBy);
    route.get("/api/:id/getRegisteredUserById",this.registrationController.getRegistredUserById);
    // route.post("/api/postRegisteredUser",this.registrationController.getRegistredUserBy);
    // route.post("/api/updateRegisteredUser",this.registrationController.getRegistredUserBy);
}
}