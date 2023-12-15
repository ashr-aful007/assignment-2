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

//delete single user 
const deleteSingleUser = async(req: Request, res: Response) =>{
     try{
          const {userId} = req.params
          const result = await userServices.deleteSingleUser(userId)

          res.status(200).json({
               success: true,
               message: 'user were deleted successfuly',
               data: result
          })
     }catch(error: any){
          res.status(500).json({
               success: false,
               message: 'Something wrong user were not deleted',
               data: error.message || 'Something is wrong',
             })
     }
}

//update single user 
const updateSingleUserById = async(req: Request, res: Response) =>{
 try{
     const {userId}= req.params
     const updateData = req.body

     const result = await userServices.updateSingleUser(userId, updateData)
     res.status(200).json({
          success: true,
          message: 'user were updated successfully',
          data: result
     })
 }catch(error: any){
     res.status(500).json({
          success: false,
          message: 'user were updated successfully',
          data: error.message || 'something wrong user were not updated'
     })
 }

}


const addUserOrder = async(req: Request, res: Response) =>{
     try{
          const {userId} = req.params
          const order = req.body
     
          const result = await userServices.addProductToDb(userId, order)
     
          res.status(200).json({
               success: true,
               message: 'Order add successfuly',
               data: result
          })
     }catch(error: any){
          res.status(500).json({
               success: false,
               message: 'user were not found',
               data: error.message || 'something wrong user were not found'
          })
     }
}


export const userController = {
     createUser,
     getusers,
     getSingleUser,
     deleteSingleUser,
     updateSingleUserById,
     addUserOrder
}