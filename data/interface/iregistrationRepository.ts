import registrationModel from "../../model/registrationModel";

export default interface iregistrationRepository
{
    getRegistredUserBy():registrationModel[];
    getRegistredUserById(id:number):registrationModel;
}