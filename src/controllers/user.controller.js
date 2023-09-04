import db from "../db/index.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";


const createuser = async (req,res)=>{
  try {
    let data = req.body;
    let securepasskey = await bcrypt.hash(data.password,12)
    data.password=securepasskey
    let result = await db.users.create(data);
    res.status(200).send({message:"you have registered to furniture"})
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }
}
const Loginuser = async (req,res)=>{
  try {
    let data = req.body;
    let result = await db.users.findOne({where:{email:data.username}});
    let match = bcrypt.compareSync(data.password,result.password);

    if(match){
      const token = Jwt.sign({email:data.username},'testing',{expiresIn:'1h'})
      return res.status(200).send({message:"you have logged in successfully",token:token})
    }

    res.status(500).send({message : "Please check your username or password!"})
    
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }
}

const updatepassword = async (req, res) => {
  try {
    let resetdata = req.body.Email;
    let result = await db.users.findOne({ where: { email: resetdata } });
    console.log(result);
    if (result !== null) {
      let result = db.users.update(
        { password: req.body.NewPassword },
        { where: { email: resetdata } }
      );
      res.status(200).send({
        message: "Your password is updated successfully",
        data: result,
      });
    } else {
      res.status(204).send({ message: "Your email is not registered" });
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};
const getusersdetails = async (req, res) => {
  try {
    let result = await db.Registration.findAll();

    res
      .status(200)
      .send({ message: "all data fetch successfully", data: result });
  } catch (error) {
    res.status(500).send({ message: "some error at database" });
  }
};

export { createuser, Loginuser, updatepassword,getusersdetails };
