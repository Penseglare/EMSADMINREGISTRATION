import { Request, Response } from 'express';

export default interface idashboardvenuelistController
{
    getVenueList(req: Request, res: Response):any;   
    getVenueListBySearch(req: Request, res: Response):any;  

}