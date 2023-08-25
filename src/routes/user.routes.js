import express from 'express'
import {createuser, Loginuser, updatepassword  } from "../controllers/user.controller.js";

const usersRoutes = (app) =>{
   let routes = express.Router() 
   routes.post('/create',createuser);
   routes.post('/loginuser',Loginuser);
//    routes.delete('/delete',createuser);
   routes.put('/updatepassword',updatepassword);

   app.use('/users',routes)
} 
export default usersRoutes