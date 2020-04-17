import {Request, Response} from "express";
import "reflect-metadata"; 
import dir from "mkdirp";
import fs from 'fs';
import path from 'path';
var download = require('download-file')
import { injectable, inject,named,interfaces } from "inversify"; 
 import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iregistrationController from "../interface/iregistrationController";
//import registrationManager from "../../business/implementation/registrationManager";
import iregistrationManager from "../../business/interface/iregistrationManager";
//import registrationModel from "../../model/registrationModel";
// import mutler from "multer";

import logging from '../../util/decorators/logging';

@injectable()
export default class registrationController implements iregistrationController
{
    private _iregistrationMgnr:iregistrationManager;
        constructor(@inject(TYPES.iregistrationbusiness) iregistrationMgnr:iregistrationManager) {
            this._iregistrationMgnr = iregistrationMgnr;
    }

    user() {
        throw new Error("Method not implemented.");
    }
public async getRegistredUserBy(req: Request, res: Response):Promise<any>
{
try{
    //console.log("controller");
        let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        //  let data = await this._iregistrationMgnr.getRegistredUserBy();
        let data = await registrationManagers.getRegistredUserBy();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async getRegistredUserById(req: Request, res: Response): Promise<any>
{
try{
     let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    let id = String(req.params.id);
    console.log(id);
        let data = await registrationManagers.getRegistredUserById(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async deleteuser(req: Request, res: Response): Promise<any>
{
try{
     let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    let id = String(req.params.id);
    //console.log(id);
        let data = await registrationManagers.deleteuser(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
} 
catch(error)
{
    throw error;
}
}
public async saveuser(req: Request, res: Response): Promise<any>
{
try{
     let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
    console.log(req.body);
        let data = await registrationManagers.saveUser(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
} 
catch(error)
{
    throw error;
}
}
public async updateuser(req: Request, res: Response):Promise<any>{
    try {
        let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        let id = String(req.params.id);
         console.log(req.body);
         console.log(req.params.id);
         
        let data = await registrationManagers.updateuser(req.body,id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
    } catch (error) {
        
    }
}
public async signupuser(req: Request, res: Response):Promise<any>
{
try{
    //console.log("HI Mahnnn");
      let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        let data = await registrationManagers.signupuser();
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send("success");
} 
catch(error)
{
    throw error;
}
}
public async getbyvalue(req: Request, res: Response):Promise<any>
{
    try{
        let registrationManagers = containerconfig.get<iregistrationManager>(TYPES.iregistrationbusiness);
        let id = Number(req.params.id);
        console.log(id);
            let data = await registrationManagers.getbyvalue(id);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
            res.send(data);
    } 
    catch(error)
    {
        throw error;
    }
}

public async upload(req: any, res: any):Promise<any>
{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      logging.fatal("dddd");
      let uploadedFile = req.files.file;
    //   https://github.com/Penseglare/EMSADMINREGISTRATION/
 fs.mkdir('upload', { recursive: true }, (err:any)  =>
    { 
        if (err) throw err; 
       else
       uploadedFile.mv('upload/'+uploadedFile.name).then((data:any) => {
        // console.log(data);
        res.send('File uploaded!');
      }).catch((err:any)=>{
        return res.status(500).send(err);  
      })
     });

}

public async download(req: any, res: any):Promise<any>
{
   var file = req.params.file;
//   var file = 'red-garden-plant-green-56866.jpg';
    var fileLocation = path.join('./upload',file);
    console.log(fileLocation);
    res.download(fileLocation, file); 
}
}
