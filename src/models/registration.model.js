const registrationform = (sequelize, DataTypes) => {
  return sequelize.define("userloginform", {
    name: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};
export default registrationform;
