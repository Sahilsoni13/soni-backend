import express from "express";
import cors from "cors"
import usersRoutes from "./src/routes/user.routes.js";
import registrationRoutes from "./src/routes/registration.routes.js";
const app = express()
const port = 3000
app.use(express.json())
app.use(cors('*'))

usersRoutes(app)
registrationRoutes(app)

// /**
//  * users routes
//  */
// //app.get('/users/',createuser) // temp
// app.post('/user/create',createuser)
// app.put('/resetpassword',resetdata)
// app.post('/hyperform',Usercreate)
// app.get('/btss',bts)
// app.delete('/removeme/:email',destroyme)
// //app.put('/user/update',createuser) // temp
// //app.delete('/user/:id',createuser) // temp
// /**
//  * product routes
//  */
// // app.post('/create',saveData)
// app.post('/login',getData)
// app.post('/selectdata',selectData)
// app.get('/getitem',getitem)
// app.get('/:id',updata)
// app.delete('/hello/:id',dltdata)
// app.put('/:id',uptime)
// app.post('/hello',mcsqr)
// app.get('/star/:id',every)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post("/verify",verify)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})