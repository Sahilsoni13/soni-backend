const staff = (sequelize,DataTypes)=>{
    return(
        sequelize.define("staff",{
            name:{
                type:DataTypes.STRING
            },
            job:{
                type:DataTypes.STRING
            },
            address:{
                type:DataTypes.STRING
            },
            salary:{
                type:DataTypes.STRING
            }
        })
    )
}
export default staff