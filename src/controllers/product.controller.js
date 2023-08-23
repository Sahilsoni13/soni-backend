import db from "../db/index.js";

const selectData=async(req,res)=>{
    try {
        let data= req.body;
        let result= await db.products.create(data)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const getitem = async(req,res)=>{
    try {
        // let data = req.body;
        let result = await db.products.findAll()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const updata =async(req,res)=>{
    try {
        let id = req.params.id
        let result= await db.products.findByPk(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const dltdata =async(req,res)=>{
    try {
        let result= await db.products.destroy()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const uptime = async(req,res)=>{
try {
    let azs = req.params.id
    let result = await db.products.update({title:req.body.title},{where:{id:azs}})
    res.status(200).send(result)
}

catch (error) {
    res.status(500).send(error.message)
}
}
export {
    selectData,
    getitem,
    updata,
    dltdata,
    uptime
}