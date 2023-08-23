const products = (sequelize,DataTypes)=>{
    return(
    sequelize.define("products",{
        title:{
           type:DataTypes.STRING 
        },
        image:{
           type:DataTypes.STRING 
        },
        description:{
           type:DataTypes.STRING 
        },
        price:{
           type:DataTypes.INTEGER
        },
        sku:{
           type:DataTypes.STRING 
        },
        star:{
           type:DataTypes.STRING 
        }
    })
    )
}
export default products