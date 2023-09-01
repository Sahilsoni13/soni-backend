import db from "../db/index.js";


const createproducts = async (req,res)=>{
try {
    let data = req.body;
    console.log(data,"helloo");
    let result = await db.productsmodel.create(data);
    res.status(200).send({message:"products successfully created"})
} catch (error) {
    res.status(500).send({message:error.message})
}
}
const getproducts = async (req,res)=>{
    try {
        let result = await db.productsmodel.findAll();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export{
    createproducts,getproducts
}