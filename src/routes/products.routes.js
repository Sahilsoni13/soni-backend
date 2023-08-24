import express from 'express'
import { createuser } from '../controllers/user.controller.js';

const productRoutes = (app) =>{
   let routes = express.Router() 

   routes.post('/create',createuser);
   routes.get('/getall',createuser);
   routes.delete('/delete',createuser);
   routes.put('/update',createuser);

   app.use('/product/',routes)
} 
export default productRoutes