import { user } from "./user.interface";
import { UserModel } from "./user.model";
import UserValidationSchema from "./user.zodValidation";


//create user 
const createUserInoDB = async(user: user) =>{

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










export const userServices = {
     createUserInoDB,
     getAllUsersFromDb
}