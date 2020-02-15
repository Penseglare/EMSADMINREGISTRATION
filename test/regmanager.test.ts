import registration from "../controller/implementation/registrationController";
import app from "../config/app";
import request from "supertest";
describe("Registration",()=>{


    it('succeeds with correct credentials', () => {
        const result =  request(app).get("/api/getRegisteredUser");
        console.log(app);
        result.ok
        debugger;
        //expect(result).toEqual("hello");
        //console.log(result);
        // expect(result.text).toEqual("hello");
        // expect(result.statusCode).toEqual(200);
       }); 
    //    it('fails with invalid credentials', async () => {
    //     const user = {email:'notarealmail@mycompany.com', password: 'somepassword'};
    //     await post(`login`, user)
    //       .expect(401);
    //    });
    //     it('fails with missing credentials', async () => {
    //     const user = {};
    //     await post(`login`, user)
    //       .expect(401);
    //    });



});