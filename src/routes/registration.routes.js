import express from "express";
import {
  Usercreate,
  getusersdetails,
  destroyuser,
  updateusers,
} from "../controllers/registration.controller.js";

const registrationRoutes = (app) => {
  let routes = express.Router();

  routes.post("/newusers", Usercreate);
  routes.put("/updateusers", updateusers);

  routes.get("/usersdetails", getusersdetails);
  routes.delete("/destroyuserid:email", destroyuser);
  // routes.put('/update',dltdata);

  app.use("/userloginform", routes);
};
export default registrationRoutes;
