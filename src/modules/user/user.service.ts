import { user } from "./user.interface";
import { UserModel } from "./user.model";
import UserValidationSchema from "./user.zodValidation";


//create user 
const createUserInoDB = async(user: user) =>{

     if( await UserModel.isUserExists(user.userId)){
          throw new Error('User already exists!')
       }

     await UserValidationSchema.parse(user)
      const Dbuser = new UserModel(user)
      const result = await Dbuser.save()
      return result
}


//get All users 
const getAllUsersFromDb = async() =>{
    const result = await UserModel.find();
    return result
}


//get single user 
const getSingleusers = async(_id: string) =>{
     const result = await UserModel.findOne({_id})
     return result
}


//delete single user
const deleteSingleUser = async(_id: string) =>{
     const result = await UserModel.updateOne({_id}, {isDelete: true})
     return result
}


//update single user 
const updateSingleUser = async(_id: string, updateData: any) =>{
     const result = await UserModel.findByIdAndUpdate(_id, updateData, {new: true});
     return result
}

//add order 
const addProductToDb = async(_id:string, product: any) =>{
     const result = await UserModel.findByIdAndUpdate(_id, product, {new: true})
     return result
}

//get all Orders
const getAllOrders = async(_id: string) =>{
     const result = await UserModel.findById(_id)
     return result
}


export const userServices = {
     createUserInoDB,
     getAllUsersFromDb,
     getSingleusers,
     deleteSingleUser,
     updateSingleUser,
     addProductToDb,
     getAllOrders
}