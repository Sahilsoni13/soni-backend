import db from "../db/index.js"
const Duperform = (sequelize,DataTypes)=>{
    return(
sequelize.define("Duperform",{
    name:{
        type:DataTypes.STRING
    },
    class:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
})
    )
}
export default Duperform