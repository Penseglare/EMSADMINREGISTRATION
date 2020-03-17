import registrationModel from "../../model/dashboardvenuelistModel"; 

export default interface idashboardvenuelistManager
{
    getVenueList():any;   
    getVenueListBySearch(searchKeyword:any):any;
}