

// export default interface iregistrationModel
// {
//     id:number; 
//     name:string;
//     code:string;
// }
export default  class regAddressModel 
{
        private  _id:number; 
        private  _place:string;
        private  _street:string;
        private _district:string;
        private _pin:string;
    constructor() {
            this._id=0;
            this._place="";
            this._street="";
            this._district ="";
            this._pin="";
    }
    

    get id(): number {
        return this._id;
    }
    set id(value:number){
        this._id = value;
    }
    get place(): string {
        return this._place;
    }
    set place(value:string){
        this._place = value;
    }
    get street(): string {
        return this._street;
    }
    set street(value:string){
        this._street = value;
    }
    get district():string{
        return this._district;
    }
    set district(value:string)
    {
        this._district=value;
    }
    get pin():string{
        return this._pin;
    }
    set pin(value:string)
    {
        this._pin=value;
    }
}