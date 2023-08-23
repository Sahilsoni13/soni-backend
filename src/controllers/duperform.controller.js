import db from "../db/index.js"
const Usercreate = async (req,res)=>{
try {
    let data = req.body;
    let result = await db.Duperform.findOne({where:{email:data.email}})
    console.log(result,"=result");
    if(result?.email == data.email){
        res.status(200).send({message:"this email is already exist" ,data:result , status:200})
    }
    else{
        console.log("==here i am ");
        let result = await db.Duperform.create(data);
        console.log(result);
        res.status(200).send({message:"Your Account has create Successfully" ,data:result, status:200})
    }
} catch (error) {
   res.status(500).send({message:error.message }) 
}
}
const bts = async (req,res)=>{
    try {
       
       let result = await db.Duperform.findAll();
   
       res.status(200).send({message:"all data fetch successfully", data:result})
    } catch (error) {
        res.status(500).send({message:"some error at database"})
    }
}

const destroyme = async (req,res)=>{
    try {
       let data = req.params.email;
       console.log(data);
       let result = await db.Duperform.destroy({where:{email:data}}) 
        res.status(200).send({message:"data has deleted successfully" ,data:result,status:200})
    } catch (error) {
        res.status(500).send({message:"something went wrong"})
    }
}
export{
    Usercreate,
    bts,
    destroyme
}