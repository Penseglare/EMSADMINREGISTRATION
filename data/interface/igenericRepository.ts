export default interface igenericRepository
{
    save<T>(schema:any, input:any):any;
    saveMany<T>(schema:any, input:Array<T>):T;
    saveManyWithMUltipleOutPut<T>(schema:any, input:Array<T>):T[];

    update<T>(schema:any, input:any,id:string):any;
    updateMany<T>(schema:any, input:Array<T>,id:number[]):T;
    updateManyWithMUltipleOutPut<T>(schema:any, input:Array<T>,id:number[]):T[];

    delete<T>(schema:any, id:string):any;
    deleteMany<T>(schema:any, id:number[]):T;
    deleteManyWithMUltipleOutPut<T>(schema:any, id:number[]):T[];
    get<T>(schema:T):any;
    getByCondition<T>(schema:any, inputJson:string):T[];
    getById<T>(schema: any, inputId: string): any;
    getSingleData<T>(schema:any, inputJson:any):any;
    dataMapping(input:any,data:any):any;
}