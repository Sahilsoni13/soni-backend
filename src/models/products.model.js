const productsmodel = (sequelize,DataTypes)=>{
    return sequelize.define("productsdata",{
    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }
    })
}
export default productsmodel