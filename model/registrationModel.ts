

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
        private _pkId:string;
        private _userid:string;
        private _password:string;
    constructor() {
            this._id=0;
            this._name="";
            this._code="";
            this._pkId ="";
            this._userid="";
            this._password="";
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
    get pkId():string{
        return this._pkId;
    }
    set pkId(value:string)
    {
        this._pkId=value;
    }
    get userid():string{
        return this._userid;
    }
    set userid(value:string)
    {
        this._userid=value;
    }
    get pwd():string{
        return this._password;
    }
    set pwd(value:string)
    {
        this._password=value;
    }
}