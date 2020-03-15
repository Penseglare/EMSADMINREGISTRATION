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
            usergrp.groupid =usergroup._groupid;
            usergrp.groupname = usergroup._groupname;
            usergrp.groupdescription =usergroup._groupdescription;
            usergrp.exportreport=usergroup._exportreport;
            console.log(usergrp);
            let data =await usergroupRepositorydata.saveUserGroup(usergrp);
        } catch (error) {
    
        }
    }
    public async updateUserGroup(usergroup:any,id:string): Promise<any>{
    try {
        let usergroupRepositorydata  = containerconfig.get<iusergroupRepository>(TYPES.iusergrouprepo);
        let usergrp = new usergroupModel();
        usergrp.groupname = usergroup._groupname;
        usergrp.groupid =usergroup._groupid;
        usergrp.groupdescription =usergroup._groupdescription;
        usergrp.exportreport=usergroup._exportreport;
        console.log(usergrp);
        let data =await usergroupRepositorydata.updateUserGroup(usergrp,id);
    } catch (error) {

    }
}
  

}