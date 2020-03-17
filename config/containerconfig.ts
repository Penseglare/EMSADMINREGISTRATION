import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import ivendor from "../controller/interface/ivenderController";
import idashboardvenuelist from "../controller/interface/idashboardvenuelistController"
import iuser from "../controller/interface/iuserController";

//controller implementation
import registration from "../controller/implementation/registrationController";
import vendor from "../controller/implementation/VenderController";
import dashboardvenuelist from "../controller/implementation/dashboardvenuelistController"
import user from "../controller/implementation/userController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import ivendorManagerbusiness from "../business/interface/ivendorManager";
import idashboardvenuelistbusiness from "../business/interface/idashboardvenuelistManager"
import iuserbusiness from "../business/interface/iuserManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import vendormanagerbusiness from "../business/implementation/vendormanager";
import dashboardvenuelistbusiness from "../business/implementation/dashboardVenueListManager"
import userbusiness from "../business/implementation/userManager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import ivendorrep from "../data/interface/ivendorrepository";
import idashboardvenuelistrepo from "../data/interface/idashboardvenuelistRepository"
import iuserrepo from "../data/interface/iuserRepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import vendorrepo from "../data/implementation/vendorrepository";
import dashboardvenuelistrepo from "../data/implementation/dashboardvenuelistRepository";
import userrepo from "../data/implementation/userRepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration);
container.bind<ivendor>(TYPES.ivendor).to(vendor); 
container.bind<iuser>(TYPES.iuser).to(user);

 
 //business inject binding   
container.bind<iregistrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<ivendorManagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);
container.bind<iuserbusiness>(TYPES.iuserbusiness).to(userbusiness); 

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<ivendorrep>(TYPES.ivendorrepo).to(vendorrepo)
container.bind<iuserrepo>(TYPES.iuserrepo).to(userrepo);

export default container;