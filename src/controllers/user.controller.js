import db from "../db/index.js";

const createuser = async (req, res) => {
  try {
    let data = req.body;
    let result = await db.users.findOne({ where: { email: data.email } });
    if (result !== null) {
      res.status(500).send({ message: "This email is already exist" });
    } else {
      let result = await db.users.create(data);
      res.status(200).send({ data: result, status: 200 });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Loginuser = async (req, res) => {
  try {
    let data = req.body;
    let result = await db.users.findOne({
      where: { email: data.username },
    });
    if (result.password == data.password) {
      res.status(200).send({ message: "you have logged in successfully" });
    } else {
      res.status(500).send({ message: "please check your email and password" });
    }
  } catch (error) {}
};

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

export { createuser, Loginuser, updatepassword };
