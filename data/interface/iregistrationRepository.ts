import registrationModel from "../../model/registrationModel";

export default interface iregistrationRepository
{
    getRegistredUserBy():any;
    getRegistredUserById(id:number):registrationModel;
}