import { Request, Response } from "express"
import { userServices } from "./user.service";


//this route for creating user 
const createUser = async(req: Request, res: Response) =>{
     try{
          const {user} = req.body

          const result = await userServices.createUserInoDB(user)

          res.status(200).json({
               success: true,
               message: 'user were creted successfuly',
               data: result
          })
     }catch(error: any){
          res.status(500).json({
               success: false,
               message: 'user were not created please try again',
               data: error.message
          })
          console.log(error);
     }
}


export const userController = {
     createUser
}