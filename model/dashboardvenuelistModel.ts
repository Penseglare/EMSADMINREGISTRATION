export default  class dashboardvenuelistModel 
{
        private  _name:string;
        private  _place:string;
        private  _address:string;
        private  _location:string;
        private _pkId:string;
        private _userid:string;
    constructor() {
            this._name="";
            this._place="";
            this._address="";
            this._location="";
            this._pkId ="";
            this._userid="";
    }    

    get name(): string {
        return this._name;
    }
    set name(value:string){
        this._name = value;
    }
    get place(): string {
        return this._place;
    }
    set place(value:string){
        this._place = value;
    }
    get address(): string {
        return this._address;
    }
    set address(value:string){
        this._address = value;
    }
    get location(): string {
        return this._location;
    }
    set location(value:string){
        this._location = value;
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
}