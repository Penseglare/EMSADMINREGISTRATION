import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";
import iusergroup from "../controller/interface/iusergroupController";

//controller implementation
import registration from "../controller/implementation/registrationController";
import usergroup from "../controller/implementation/usergroupController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";
import iusergroupbusiness from "../business/interface/iusergroupManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";
import usergroupbusiness from "../business/implementation/usergroupManager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";
import iusergrouprepo from "../data/interface/iusergroupRepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";
import usergrouprepo from "../data/implementation/usergroupRepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration); 
container.bind<iusergroup>(TYPES.iusergroup).to(usergroup); 

 
 //business inject binding   
container.bind<registrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 
container.bind<usergroupbusiness>(TYPES.iusergroupbusiness).to(usergroupbusiness); 

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);
container.bind<iusergrouprepo>(TYPES.iusergrouprepo).to(usergrouprepo);

export default container;