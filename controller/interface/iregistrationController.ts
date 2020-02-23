import { Request, Response } from 'express';

export default interface iregistrationController
{
    getRegistredUserBy(req: Request, res: Response):any;
    getRegistredUserById(req: Request, res: Response):any;
    deleteuser(req: Request, res: Response):any;
    saveuser(req: Request, res: Response):void;
    user():any;
    signupuser(req: Request, res: Response):any;
    updateuser(req: Request, res: Response):any;
    getbyvalue(req: Request, res: Response):any;
}