import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify"; 
import TYPES from "../../config/type"; 
import  containerconfig from "../../config/containerconfig";
import iusergroupManager from "../interface/iusergroupManager";

import iusergroupRepository from "../../data/interface/iusergroupRepository";
import usergroupModel from "../../model/usergroupModel"; 

import mongoose from 'mongoose';
import  usergroupSchema  from '../../dbmodel/usergroupSchema';


@injectable()
export default class usergroupManager implements iusergroupManager
{
    
    public async getUserGroup():Promise<any>
    {

        try {
            let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
            let data = await usergroupRepositorydata.getUserGroup();
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async getUserGroupById(pkId:string): Promise<any>
    {

        try {
            let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
            let data =await usergroupRepositorydata.getUserGroupById(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    }
    public async deleteUserGroup(pkId:string): Promise<any>
    {

        try {
            let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
            let data =await usergroupRepositorydata.deleteUserGroup(pkId);
            console.log(data);
            return data;
            
        } catch (error) {
            throw error;
        }
    } 
    public async saveUserGroup(usergroup:any):Promise<void>
    {
        try {
            let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
            let usergrp = new usergroupModel();
             console.log(usergroup);
            usergrp.groupname = usergroup._usergroupname;
            usergrp.groupid =usergroup._id;
            usergrp.groupdescription =usergroup._usergroupdescription;
            usergrp.exportreport=usergroup._exportreports;
            // console.log(usergrp);
            let data =await usergroupRepositorydata.saveUserGroup(usergrp);
        } catch (error) {
    
        }
    }
    public async updateUserGroup(usergroup:any,id:string): Promise<any>{
    try {
        let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
        let usergrp = new usergroupModel();
        usergrp.groupname = usergroup._usergroupname;
        usergrp.groupid =usergroup._id;
        usergrp.groupdescription =usergroup._usergroupdescription;
        usergrp.exportreport=usergroup._exportreports;
        console.log(usergrp);
        let data =await usergroupRepositorydata.updateUserGroup(usergrp,id);
    } catch (error) {

    }
}
  

}