import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import iusergroup from "../controller/interface/iusergroupController";
import ivendor from "../controller/interface/ivenderController";
<<<<<<< HEAD
=======
import iuser from "../controller/interface/iuserController";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//controller implementation
import registration from "../controller/implementation/registrationController";
import usergroup from "../controller/implementation/usergroupController";
import vendor from "../controller/implementation/VenderController";
<<<<<<< HEAD
=======
import user from "../controller/implementation/userController";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import iusergroupbusiness from "../business/interface/iusergroupManager";
import ivendorManagerbusiness from "../business/interface/ivendorManager";
<<<<<<< HEAD
=======
import iuserbusiness from "../business/interface/iuserManager";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import usergroupbusiness from "../business/implementation/usergroupManager";
import vendormanagerbusiness from "../business/implementation/vendormanager";
<<<<<<< HEAD
=======
import userbusiness from "../business/implementation/userManager";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import iusergrouprepo from "../data/interface/iusergroupRepository";
import ivendorrep from "../data/interface/ivendorrepository";
<<<<<<< HEAD
=======
import iuserrepo from "../data/interface/iuserRepository";
import igenericRepo from "../data/interface/igenericRepository";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import usergrouprepo from "../data/implementation/usergroupRepository";
import vendorrepo from "../data/implementation/vendorrepository";
<<<<<<< HEAD
=======
import userrepo from "../data/implementation/userRepository";

import genericRepo from "../data/implementation/genericRepository";
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration); 
container.bind<iusergroup>(TYPES.iusergroup).to(usergroup); 
<<<<<<< HEAD
container.bind<ivendor>(TYPES.ivendor).to(vendor); 
 
 //business inject binding   
container.bind<registrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<usergroupbusiness>(TYPES.iusergroupbusiness).to(usergroupbusiness); 
container.bind<vendormanagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);
=======
container.bind<ivendor>(TYPES.ivendor).to(vendor) 
container.bind<iuser>(TYPES.iuser).to(user);
 
 //business inject binding   
container.bind<iregistrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<iusergroupbusiness>(TYPES.iusergroupbusiness).to(usergroupbusiness); 
container.bind<ivendorManagerbusiness>(TYPES.ivendorbusiness).to(vendormanagerbusiness);
container.bind<iuserbusiness>(TYPES.iuserbusiness).to(userbusiness); 
>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<iusergrouprepo>(TYPES.iusergrouprepo).to(usergrouprepo);
<<<<<<< HEAD
container.bind<ivendorrep>(TYPES.iregistrationrepo).to(vendorrepo);
=======
container.bind<ivendorrep>(TYPES.ivendorrepo).to(vendorrepo)
container.bind<iuserrepo>(TYPES.iuserrepo).to(userrepo);

container.bind<igenericRepo>(TYPES.igenericRepo).to(genericRepo);

>>>>>>> a70ec1631a82235a37e905278fc3cb03a0e8cc6a
export default container;