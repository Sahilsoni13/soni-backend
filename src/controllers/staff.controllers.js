import db from "../db/index.js";

const mcsqr = async(req,res)=>{
    try {
        let data = req.body
        let result = await db.staff.create(data)
        res.status(200).send(result)
    } catch (error) {
       res.status(500).send(error.message) 
    }
}
const every = async(req,res)=>{
    try {
    let asb = req.params.id
    let result = await db.staff.findAll({where:{name:asb}})
    res.status(200).send(result)
    } catch (error) { 
res.status(500).send(error.message)
    }
}      
export{
    mcsqr,
    every
}