import igenericRepository from "../interface/igenericRepository";
export default class genericRepository<T,Tobj> implements igenericRepository<T,Tobj>
{
   public save<T>(input: T): T {
        throw new Error("Method not implemented.");
    }
    public saveMany<T>(input: T[]): T {
        throw new Error("Method not implemented.");
    }
    public saveManyWithMUltipleOutPut<T>(input: T[]): T[] {
        throw new Error("Method not implemented.");
    }
    public update<T>(input: T, id: number): T {
        throw new Error("Method not implemented.");
    }
    public updateMany<T>(input: T[], id: number[]): T {
        throw new Error("Method not implemented.");
    }
    public updateManyWithMUltipleOutPut<T>(input: T[], id: number[]): T[] {
        throw new Error("Method not implemented.");
    }
    public delete<T>(id: number): T {
        throw new Error("Method not implemented.");
    }
    public deleteMany<T>(id: number[]): T {
        throw new Error("Method not implemented.");
    }
    public deleteManyWithMUltipleOutPut<T>(id: number[]): T[] {
        throw new Error("Method not implemented.");
    }
    public get<T>(): T[] {
        throw new Error("Method not implemented.");
    }
    public getByCondition<T>(inputJson: string): T[] {
        throw new Error("Method not implemented.");
    }
    public getById<T>(inputId: any): T {
        throw new Error("Method not implemented.");
    }
    public getSingleData<T>(inputJson: string): T {
        throw new Error("Method not implemented.");
    }
    
}