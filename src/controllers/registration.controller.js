import db from "../db/index.js";
const Usercreate = async (req, res) => {
  try {
    let data = req.body;
    let result = await db.Registration.findOne({
      where: { email: data?.email },
    });

    if (result !== null) {
      res
        .status(200)
        .send({
          message: "this email is already exist",
          data: result,
          status: 200,
        });
    } else {
      let result = await db.Registration.create(data);
      console.log(result);
      res
        .status(200)
        .send({
          message: "Your Account has create Successfully",
          data: result,
          status: 200,
        });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
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

const destroyuser = async (req, res) => {
  try {
    let data = req.params.email;
    console.log(data);
    let result = await db.Registration.destroy({ where: { email: data } });
    res
      .status(200)
      .send({
        message: "data has deleted successfully",
        data: result,
        status: 200,
      });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};

let updateusers = async (req, res) => {
  try {
    let response = await db.Registration.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res
      .status(200)
      .send({
        message:
          response[0] === 1
            ? "User record has been updated."
            : "Opps! somethieng went wrong.",
      });
  } catch (error) {
    res.status(200).send(error);
  }
};
export { Usercreate, getusersdetails, destroyuser, updateusers };
