

// export default interface iregistrationModel
// {
//     id:number; 
//     name:string;
//     code:string;
// }
export default  class registrationModel 
{
        private readonly _id:number; 
        private readonly _name:string;
        private readonly _code:string;
    constructor(id:number,name:string,code:string) {
            this._id=id;
            this._name=name;
            this._code=code;
    }
    

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get code(): string {
        return this._code;
    }
}