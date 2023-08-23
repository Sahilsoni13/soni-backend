import express from "express";
import db from "./src/db/index.js";
import {createuser, getData, resetdata  } from "./src/controllers/user.controller.js";
import {selectData,getitem,updata,dltdata, uptime } from "./src/controllers/product.controller.js"
import { mcsqr ,every} from "./src/controllers/staff.controllers.js";
// import { verify } from "./src/controllers/email.controller.js";
import verify from "./src/controllers/email.controller.js"
import cors from "cors"
import  {Usercreate,bts,destroyme}  from "./src/controllers/duperform.controller.js";


const app = express()
const port = 3000
app.use(express.json())
app.use(cors('*'))

/**
 * users routes
 */
//app.get('/users/',createuser) // temp
app.post('/user/create',createuser)
app.put('/resetpassword',resetdata)
app.post('/hyperform',Usercreate)
app.get('/btss',bts)
app.delete('/removeme/:email',destroyme)
//app.put('/user/update',createuser) // temp
//app.delete('/user/:id',createuser) // temp
/**
 * product routes
 */
// app.post('/create',saveData)
app.post('/login',getData)
app.post('/selectdata',selectData)
app.get('/getitem',getitem)
app.get('/:id',updata)
app.delete('/hello/:id',dltdata)
app.put('/:id',uptime)
app.post('/hello',mcsqr)
app.get('/star/:id',every)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/verify",verify)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})