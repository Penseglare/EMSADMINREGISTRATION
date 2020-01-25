import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "./type";

//controller interface
import iregistration from "../controller/interface/iregistrationController";

//controller implementation
import registration from "../controller/implementation/registrationController";

//business interface
import iregistrationbusiness from "../business/interface/iregistrationManager";

//business implementation
import registrationbusiness from "../business/implementation/registrationManager";

//data interface
import iregistrationrepo from "../data/interface/iregistrationRepository";

//data implementation
import registrationrepo from "../data/implementation/registrationRepository";

const container = new Container();

//controller inject binding
container.bind<iregistration>(TYPES.iregistration).to(registration); 

 
 //business inject binding   
container.bind<registrationbusiness>(TYPES.iregistrationbusiness).to(registrationbusiness); 

//data injuct binding
container.bind<iregistrationrepo>(TYPES.iregistrationrepo).to(registrationrepo);

export default container;