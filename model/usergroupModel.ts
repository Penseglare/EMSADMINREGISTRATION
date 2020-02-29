

// export default interface iregistrationModel
// {
//     id:number; 
//     name:string;
//     code:string;
// }
export default  class usergroupModel 
{
        private  _groupid:number; 
        private  _groupname:string;
        private  _groupdescription:string;
       
    constructor() {
            this._groupid=0;
            this._groupname="";
            this._groupdescription="";
            
    }
    

    get groupid(): number {
        return this._groupid;
    }
    set groupid(value:number){
        this._groupid= value;
    }
    get groupname(): string {
        return this._groupname;
    }
    set groupname(value:string){
        this._groupname = value;
    }
    get groupdescription(): string {
        return this._groupdescription;
    }
    set groupdescription(value:string){
        this._groupdescription = value;
    }
    
}