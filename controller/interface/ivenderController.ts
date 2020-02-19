import { Request, Response } from 'express';
import vendermodel from "../../model/vendermodel"
export default interface ivenderController
{
     InsertVenderdetails(req: Request, res: Response):any;
}