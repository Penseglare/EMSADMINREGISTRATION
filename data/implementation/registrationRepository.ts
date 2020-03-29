import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/type"; 
 import  containerconfig from "../../config/containerconfig";

import iregistrationRepository from "../interface/iregistrationRepository";
import registrationModel from "../../model/registrationModel";
import mongodb from 'mongodb';
import globalModel  from "../../dbmodel/globalModel";
import igenericRepo  from "../interface/igenericRepository";

@injectable()
export default class registrationRepository implements iregistrationRepository
{
      private _igenericRepo:igenericRepo;
    constructor(@inject(TYPES.igenericRepo) igenericRepo: igenericRepo) {
       this._igenericRepo=igenericRepo;
    }

    public getRegistredUserBy():any
    {
        try {
            return this._igenericRepo.get(globalModel.regn)
                       .then((businesses:any) => {
                        let regModel= Array<registrationModel>();
                             businesses.map((element:any,i:number) => {
                            let re =new registrationModel();
                            re.pkId = element._id,
                            re.id = element.id;re.name=element.name;re.code=element.code;
                            regModel.push(re);
                           });
                           
                             return regModel;
              })
              .catch((err:any) => {
                console.error(err)
              })
        }
         catch (error) {
            throw error;
        }
    } 
    public getRegistredUserById(pkId:string):any
    {
        try {
          
            return this._igenericRepo.getById(globalModel.regn,pkId)
            .then((v:any)=>{
                let re =new registrationModel();
                re.pkId = v._id,
                re.id = v.id;re.name=v.name;re.code=v.code;
                console.log(re);
                return re;
            }).catch((err:any) => {
                console.error(err)
              });
        } catch (error) {
            throw error;
        }
    } 
    public deleteuser(pkId:string):any
    {
        try {
            //pkId = "5e403b0c21c3db2c080fd267";
            // const mongodb = require("mongodb");
            return this._igenericRepo.delete(globalModel.regn,pkId)
            //.find()
            .then((businesses:any) => {
             let regModel= Array<registrationModel>();
        //  businesses.map((element:any,i:number) => {
        //          let re =new registrationModel();
        //          re.pkId = element._id,
        //          re.id = element.id;re.name=element.name;re.code=element.code;
        //          regModel.push(re);
        //         });
                //console.log(businesses);
                  return regModel;
            }).catch((err:any) => {
                console.error(err)
              });
           //console.log(data);
        } catch (error) {
            throw error;
        }
    } 
    public saveUser(registration:registrationModel):void
    {
        try {
            // let regn = mongoose.model("registration",registrationSchema);
             let inputObject ={id:registration.id,name : registration.name,code:registration.code};
            // let reg = new globalModel.regn({id:registration.id,name : registration.name,code:registration.code});
            //          reg.save().then((sc:any) => {
            //     console.log("saved success");
            // })
            // .catch((err:any) => {
            //  console.log("unable to save to database");
            //  });

            
          this._igenericRepo.save(globalModel.regn,inputObject).then((sc:any) => {
        console.log("saved success");
             })
              .catch((err:any) => {
              console.log("unable to save to database");
              });
 
        } catch (error) {
            
        } 
    }
    public signupuser():any
    {
        try{
            alert("repository");
            // let login=mongoose.model("Signup",LoginSchema);
           // let reg= new regn({signupId:registration.id,userid:registration.userid,password:registration.pwd});
            //const mongodb = require("mongodb");
            globalModel.login.find()
            .then(businesses => {
             let regModel= Array<registrationModel>();
                  businesses.map((element:any,i:number) => {
                    console.log("Login Successfull");
                });
            }).catch((err:any)=>{
                    console.log("Please signup for free");
                });

        }
        catch(error)
        {

        }
    }

    public updateuser(registration:registrationModel, id:string):any
    {
        try {
            // let regn = mongoose.model("registration",registrationSchema);
            // let reg = new globalModel.regn({id:registration.id,name : registration.name,code:registration.code});
        //   return  globalModel.login.findById({"_id":new mongodb.ObjectId(id)},(err:any,data:any)=>
        //   {
        //       data.id=registration.id;data.name= registration.name;data.code=registration.code;
        //       console.log(data)
        //       data.save().then((sc:any) => {
        //           console.log(sc);
        //         console.log("update success");
        //     })
        //     .catch((err:any) => {
        //      console.log("unable to update to database");
        //      })
        //   });
        return  this._igenericRepo.getById(globalModel.regn,id).then((data:any)=>{
            data.id=registration.id;data.name= registration.name;data.code=registration.code;
           return this._igenericRepo.update(globalModel.regn,data,id).then((u:any) => {
                console.log("update success");
            })
                .catch((err:any) => {
                 console.log("unable to update to database");
                 });
        })
        } catch (error) {
            
        } 
    }
public getbyvalue(id:number):any
{
    try {
        let re =new registrationModel();
        let  searchCriteria ={"id":id};
        // console.log(searchCriteria);
         return this._igenericRepo.getSingleData(globalModel.regn,searchCriteria)
         .then((v:any)=>{
             console.log(v);
            re.pkId = v._id;
            re.id = v.id;
            re.name=v.name;
            re.code=v.code;
            // console.log(v);
            // console.log(re);
            return re;
        }).catch((err:any) => {
            console.error(err)
          });
     }
      catch (error) {
         throw error;
     }
}
}