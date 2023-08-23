import db from "../db/index.js";

const verify = async (req,res)=>{
    try {
        let data = req.body.email
        let result  = await db.email.findOne({where:{email:data}})
        var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if(result!=null){
            res.status(200).send(error.message)
        }
        else if(!data.match(emailFormat)){
        res.status(200).send(error.message)
        }
        else{
            let result = await db.email.create(req.body)
            res.status(500).send(result)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export default verify
    
