import express from 'express'
import  {Usercreate,getusersdetails,destroyuser}  from "../controllers/registration.controller.js";

const registrationRoutes = (app) =>{
   let routes = express.Router() 

   routes.post('/newusers',Usercreate);
   routes.get('/usersdetails',getusersdetails);
   routes.delete('/destroyuserid:email',destroyuser);
   // routes.put('/update',dltdata);

   app.use('/userloginform',routes)
} 
export default registrationRoutes