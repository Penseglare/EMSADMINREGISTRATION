import "reflect-metadata"; 
import { injectable, inject,named,interfaces } from "inversify";
import mongodb from 'mongodb';
import igenericRepository from "../interface/igenericRepository";

@injectable()
export default class genericRepository implements igenericRepository
{
    public save<T>(schema: any, input: any): any {
        let object = new schema(input);
        object.save().then((sc:any) => {
        console.log("saved success");
            })
      .catch((err:any) => {
      console.log("unable to save to database");
       });
    }
    public saveMany<T>(schema: T, input: T[]): T {
        throw new Error("Method not implemented.");
    }
    public saveManyWithMUltipleOutPut<T>(schema: T, input: T[]): T[] {
        throw new Error("Method not implemented.");
    }
    public update<T>(schema: any, input: any, id: string): any {
         return input.save().then((sc:any) => {
            console.log("update success");
        })
        .catch((err:any) => {
         console.log("unable to update to database");
         })
    }
    public updateMany<T>(schema: T, input: T[], id: number[]): T {
        throw new Error("Method not implemented.");
    }
    public updateManyWithMUltipleOutPut<T>(schema: T, input: T[], id: number[]): T[] {
        throw new Error("Method not implemented.");
    }
    public delete<T>(schema: any, id: string): any {
        return schema.findByIdAndRemove({"_id":new mongodb.ObjectId(id)})
            .then((businesses:any) => {
                  return businesses;
            }).catch((err:any) => {
                console.error(err)
              });
    }
    public deleteMany<T>(schema: T, id: number[]): T {
        throw new Error("Method not implemented.");
    }
    public deleteManyWithMUltipleOutPut<T>(schema: T, id: number[]): T[] {
        throw new Error("Method not implemented.");
    }
    public get<T>(schema: any): any {
        return schema.find()
        .then((businesses:any) => {
            return businesses;
            })            
       .catch((err:any) => {
        console.error(err)
       })
    }
    public getByCondition<T>(schema: T, inputJson: string): T[] {
        throw new Error("Method not implemented.");
    }
    public getById<T>(schema: any, inputId: string): any {
        return schema.findById({"_id":new mongodb.ObjectId(inputId)})
            .then((v:any)=>{
                return v;
            }).catch((err:any) => {
                console.error(err)
              });
    }
    public getSingleData<T>(schema: any, inputJson: any): any {
        console.log(inputJson);
        return schema.findOne(inputJson)
        .then((v:any)=>{
           return v;
       }).catch((err:any) => {
           console.error(err)
         });
    }

    public dataMapping(input:any,data:any):any{
         return data;
    }
  
}