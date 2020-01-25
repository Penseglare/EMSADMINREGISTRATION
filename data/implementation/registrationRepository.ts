import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import iregistrationRepository from "../interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel";
import  express from "express";

@injectable()
export default class registrationRepository implements iregistrationRepository
{
    //public registrationModel:registrationModel = new registrationModel();
    public registrationModelobj = [  new registrationModel( 1,"A","ab"),new registrationModel( 2,"b","abc")];
    public getRegistredUserBy():registrationModel[]
    {
        try {
           
            return  this.registrationModelobj;

        } catch (error) {
            throw error;
        }
    } 
    public getRegistredUserById(id:number):registrationModel
    {
        try {
           
            return  this.registrationModelobj[1];

        } catch (error) {
            throw error;
        }
    } 
}