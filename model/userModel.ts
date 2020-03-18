export default  class userModel 
{
        private  _username:string;
        private  _address:string;
        private _userid:number;
        private _password:string;
        private _confirmpassword:string;
    constructor() {
            this._username="";
            this._address="";
            this._userid=0;
            this._password="";
            this._confirmpassword="";
    }
    

    get username(): string {
        return this._username;
    }
    set username(value:string){
        this._username = value;
    }
    get address(): string {
        return this._address;
    }
    set address(value:string){
        this._address = value;
    }
    get userid():number{
        return this._userid;
    }
    set userid(value:number)
    {
        this._userid=value;
    }
    get password():string{
        return this._password;
    }
    set password(value:string)
    {
        this._password=value;
    }
    get confirmpassword():string{
        return this._confirmpassword;
    }
    set confirmpassword(value:string)
    {
        this._confirmpassword=value;
    }
}