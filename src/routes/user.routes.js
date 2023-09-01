import express from "express";
import {
  createuser,
  Loginuser,
  updatepassword,
} from "../controllers/user.controller.js";



import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(process.cwd())
    cb(null,process.cwd()+'/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.fieldname+'-'+ Date.now() + '-' + Math.round(Math.random() * 1E9)+'-'+file.originalname;
    req.body.profile = uniqueSuffix
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


const usersRoutes = (app) => {
  let routes = express.Router();
  routes.post("/create",upload.single('profile'), createuser);
  routes.post("/loginuser", Loginuser);
  //    routes.delete('/delete',createuser);
  routes.put("/updatepassword", updatepassword);
  app.use("/users", routes);
};
export default usersRoutes;
