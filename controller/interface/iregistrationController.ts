import { Request, Response } from 'express';

export default interface iregistrationController
{
    getRegistredUserBy(req: Request, res: Response):any;
    getRegistredUserById(req: Request, res: Response):any
}