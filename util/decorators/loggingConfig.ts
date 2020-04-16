import { configure, getLogger, Logger } from 'log4js';

export default class logginConfig {

    static ConfigFilePath:any =()=>
    {
       return configure('./filename');
    };

    static configAppender:any=()=>
    {
     return configure({
            appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
            categories: { default: { appenders: ['cheese'], level: 'error' } }
        });
    }

    static logger:any=()=>
    {
        return  getLogger();
    }

}

 

// const logger = getLogger();

// export default logger;

// logger.level = 'debug';
// logger.debug("Some debug messages");