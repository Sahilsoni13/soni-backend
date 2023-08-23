import db from "../db/index.js"

const email =(sequelize,DataTypes)=>{
    return(
        sequelize.define("email",{
            name:{
                type:DataTypes.STRING
            },
            mobileno:{
                type:DataTypes.STRING
            }, 
            email:{
                type:DataTypes.STRING
            },
            gender:{
                type:DataTypes.STRING
            },
            password:{
                type:DataTypes.STRING
            }
        })
    )
}
export default email