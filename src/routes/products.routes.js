import express from "express"
import multer from "multer";
import { createproducts, getproducts } from "../controllers/products.controller.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(process.cwd())
      cb(null,process.cwd()+'/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.fieldname+'-'+ Date.now() + '-' + Math.round(Math.random() * 1E9)+'-'+file.originalname;
      req.body.image = uniqueSuffix
      cb(null, uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
const productsroutes = (app) => {
  let routes = express.Router();

  routes.post("/createproductsdata",upload.single('image'),createproducts);
//   routes.put();
  routes.get('/getproducts',getproducts);
//   routes.delete();
  app.use("/productsdata", routes);
};

export default productsroutes;
