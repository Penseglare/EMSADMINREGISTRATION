import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import iusergroup from "../controller/interface/iusergroupController";
import ivendor from "../controller/interface/ivenderController";

//controller implementation
import registration from "../controller/implementation/registrationController";
import usergroup from "../controller/implementation/usergroupController";
import vendor from "../controller/implementation/VenderController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import iusergroupbusiness from "../business/interface/iusergroupManager";
import ivendorManagerbusiness from "../business/interface/ivendorManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import usergroupbusiness from "../business/implementation/usergroupManager";
import vendormanagerbusiness from "../business/implementation/vendormanager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import iusergrouprepo from "../data/interface/iusergroupRepository";
import ivendorrep from "../data/interface/ivendorrepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import usergrouprepo from "../data/implementation/usergroupRepository";
import vendorrepo from "../data/implementation/vendorrepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration); 
container.bind<iusergroup>(TYPES.iusergroup).to(usergroup); 
container.bind<ivendor>(TYPES.ivendor).to(vendor); 
 
 //business inject binding   
container.bind<registrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<usergroupbusiness>(TYPES.iusergroupbusiness).to(usergroupbusiness); 
container.bind<vendormanagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<iusergrouprepo>(TYPES.iusergrouprepo).to(usergrouprepo);
container.bind<ivendorrep>(TYPES.iregistrationrepo).to(vendorrepo);
export default container;