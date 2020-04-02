import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import iusergroup from "../controller/interface/iusergroupController";
import ivendor from "../controller/interface/ivenderController";
import iuser from "../controller/interface/iuserController";

//controller implementation
import registration from "../controller/implementation/registrationController";
import usergroup from "../controller/implementation/usergroupController";
import vendor from "../controller/implementation/VenderController";
import user from "../controller/implementation/userController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import iusergroupbusiness from "../business/interface/iusergroupManager";
import ivendorManagerbusiness from "../business/interface/ivendorManager";
import iuserbusiness from "../business/interface/iuserManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import usergroupbusiness from "../business/implementation/usergroupManager";
import vendormanagerbusiness from "../business/implementation/vendormanager";
import userbusiness from "../business/implementation/userManager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import iusergrouprepo from "../data/interface/iusergroupRepository";
import ivendorrep from "../data/interface/ivendorrepository";
import iuserrepo from "../data/interface/iuserRepository";
import igenericRepo from "../data/interface/igenericRepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import usergrouprepo from "../data/implementation/usergroupRepository";
import vendorrepo from "../data/implementation/vendorrepository";
import userrepo from "../data/implementation/userRepository";

import genericRepo from "../data/implementation/genericRepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration); 
container.bind<iusergroup>(TYPES.iusergroup).to(usergroup); 
container.bind<ivendor>(TYPES.ivendor).to(vendor) 
container.bind<iuser>(TYPES.iuser).to(user);
 
 //business inject binding   
container.bind<iregistrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<iusergroupbusiness>(TYPES.iusergroupbusiness).to(usergroupbusiness); 
container.bind<ivendorManagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);
container.bind<iuserbusiness>(TYPES.iuserbusiness).to(userbusiness); 

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<iusergrouprepo>(TYPES.iusergrouprepo).to(usergrouprepo);
container.bind<ivendorrep>(TYPES.ivendorrepo).to(vendorrepo)
container.bind<iuserrepo>(TYPES.iuserrepo).to(userrepo);

container.bind<igenericRepo>(TYPES.igenericRepo).to(genericRepo);

export default container;