
import loggerConfig from './loggingConfig' ;
import { configure, getLogger, Logger } from 'log4js';
class logging{
    
    private static _logger:any;
    static _Initialize() {
        configure({
            appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
            categories: { default: { appenders: ['cheese'], level: 'error' } }
        });
        
        this._logger = getLogger();    
    }
   
  public static trace:any = (input:string)=>{
    logging._logger.trace('Entering cheese testing');
   };
   public static debug:any = (input:string)=>{
    logging._logger.debug('Got cheese.');
   };
   public static info:any = (input:string)=>{
    
       console.log("logging");
    logging._logger.info('Cheese is Comté.');
   };
   public static warn:any = (input:string)=>{
    logging._logger.warn('Cheese is quite smelly.');
   };
   public static error:any = (input:string)=>{
    logging._Initialize();
    console.log("logging");
    logging._logger.error('Cheese is too ripe!');
   };
   public static fatal:any = (input:string)=>{
    logging._Initialize();
    console.log("logging");
    logging._logger.fatal('Cheese was breeding ground for listeria.');
   };
}
// logging._Initialize();
export default logging;