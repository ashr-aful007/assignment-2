import { user } from "./user.interface";
import { UserModel } from "./user.model";
import UserValidationSchema from "./user.zodValidation";



const createUserInoDB = async(user: user) =>{

     await UserValidationSchema.parse(user)
      const Dbuser = new UserModel(user)
      const result = await Dbuser.save()
      return result
}








export const userServices = {
     createUserInoDB,
}