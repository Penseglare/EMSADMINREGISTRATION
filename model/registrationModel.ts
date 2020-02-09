

// export default interface iregistrationModel
// {
//     id:number; 
//     name:string;
//     code:string;
// }
export default  class registrationModel 
{
        private  _id:number; 
        private  _name:string;
        private  _code:string;
    constructor() {
            this._id=0;
            this._name="";
            this._code="";
    }
    

    get id(): number {
        return this._id;
    }
    set id(value:number){
        this._id = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value:string){
        this._name = value;
    }
    get code(): string {
        return this._code;
    }
    set code(value:string){
        this._code = value;
    }
}