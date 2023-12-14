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



//this route for getAll user 
const getusers = async(req: Request, res: Response) =>{
     try{
          const result = await userServices.getAllUsersFromDb()

          res.status(200).json({
               success: true,
               message: 'User are retrieved successfully',
               data: result,
             })
     }catch(error: any){
          res.status(500).json({
               success: false,
               message: 'Something wrong user were not retrieved',
               data: error.message || 'Something is wrong',
             })
     }
}


//get single user 
const getSingleUser = async(req: Request, res: Response) =>{
     try{
          const {userId} = req.params
          const result = await userServices.getSingleusers(userId)

          res.status(200).json({
               success: true,
               message: 'User are retrieved successfully',
               data: result,
             })

     }catch(error: any){
          res.status(500).json({
               success: false,
               message: 'Something wrong user were not retrieved',
               data: error.message || 'Something is wrong',
             })
     }
}

export const userController = {
     createUser,
     getusers,
     getSingleUser
}