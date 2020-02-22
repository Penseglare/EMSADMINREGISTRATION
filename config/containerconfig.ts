import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import ivendor from "../controller/interface/ivenderController";

//controller implementation
import registration from "../controller/implementation/registrationController";
import vendor from "../controller/implementation/VenderController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import ivendorManagerbusiness from "../business/interface/ivendorManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import vendormanagerbusiness from "../business/implementation/vendormanager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import ivendorrep from "../data/interface/ivendorrepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import vendorrepo from "../data/implementation/vendorrepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration);
container.bind<ivendor>(TYPES.ivendor).to(vendor) 

 
 //business inject binding   
container.bind<registrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<vendormanagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<ivendorrep>(TYPES.iregistrationrepo).to(vendorrepo)

export default container;