import registrationModel from "../../model/dashboardvenuelistModel"; 

export default interface idashboardvenuelistRepository
{
    getVenueList():any;   
    getVenueListBySearch(SearchKeyword:string):any;   
}