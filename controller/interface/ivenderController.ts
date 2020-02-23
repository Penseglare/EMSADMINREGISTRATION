import { Request, Response } from 'express';
import vendermodel from "../../model/vendermodel"
export default interface ivenderController
{
     savevendor(req: Request, res: Response):any;
     getRegistredvendorById(req: Request, res: Response):any;
     
}