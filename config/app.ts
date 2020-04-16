import express from "express";
import * as bodyParser from "body-parser";
import routeConfig from "../config/routeConfig"
import dbconfig from "../config/dbConfig";
// import mongodb from "mongodb";
import mongodb from "mongoose";
import cors from "cors";
import fileupload from "express-fileupload";
class App {

    public app: express.Application;
    public routeConfig:routeConfig=new routeConfig();
    public db:dbconfig= new dbconfig(); 
    constructor() {
        this.app = express();
        this.config();   
        this.routeConfig.registerRoute(this.app);
        this.db.dbInitialization(mongodb,'mongodb://127.0.0.1:27017/emsadmin');
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        this.app.use(fileupload());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
}

export default new App().app;