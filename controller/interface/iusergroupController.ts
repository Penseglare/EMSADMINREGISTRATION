import { Request, Response } from 'express';

export default interface iusergroupController
{
    getUserGroup(req: Request, res: Response):any;
    getUserGroupById(req: Request, res: Response):any;
    deleteUserGroup(req: Request, res: Response):any;
    saveUserGroup(req: Request, res: Response):void;
    updateUserGroup(req: Request, res: Response):any;

}