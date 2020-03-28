export default interface igenericRepository<T,Tobj>
{
    save<T>(input:T):T;
    saveMany<T>(input:Array<T>):T;
    saveManyWithMUltipleOutPut<T>(input:Array<T>):T[];

    update<T>(input:T,id:number):T;
    updateMany<T>(input:Array<T>,id:number[]):T;
    updateManyWithMUltipleOutPut<T>(input:Array<T>,id:number[]):T[];

    delete<T>(id:number):T;
    deleteMany<T>(id:number[]):T;
    deleteManyWithMUltipleOutPut<T>(id:number[]):T[];
    get<T>():T[];
    getByCondition<T>(inputJson:string):T[];
    getById<T>(inputId:any):T;
    getSingleData<T>(inputJson:string):T;
}