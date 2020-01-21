import {Request, Response} from "express";
import registrationManager from "../business/registrationManager";
import registrationModel from "../model/registrationModel"; 
export default class registrationController
{
public getRegistredUserBy(req: Request, res: Response):any
{
try{
    let registrationManagers = new registrationManager();
        let data = registrationManagers.getRegistredUserBy();
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public getRegistredUserById(req: Request, res: Response):any
{
try{
    let registrationManagers = new registrationManager();
    let id = Number(req.params.id);
        let data = registrationManagers.getRegistredUserById(id);
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
}
