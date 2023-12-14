import express, { Application, Request,Response } from 'express';
import { userRouts } from './modules/user/user.routes';
const app:Application = express()

//middle ware setUp
app.use(express.json())



//route setup
app.use('/api/users', userRouts)









app.get('/', async(req:Request, res:Response) =>{
   res.send('hello world')
})







export default app