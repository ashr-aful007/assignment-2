import { Schema, model } from 'mongoose';
import { UserStaticModel, user } from './user.interface';
import bcrypt from "bcrypt";
import config from '../../app/config';


export const userSchema = new Schema<user>({
     userId: {
          type: Number,
          required: [true, 'Please provide userId'],
          unique: true
     },
     username: {
          type: String,
          required: [true, 'please provide your name'],
          trim: true
     },
     password:{
          type: String,
          required: [true, 'please provide vaild strong password']
     },
     fullName:{
          firstName: {
               type:String,
               required: [true, 'please provide your firstName']
          },
          lastName:{
               type: String,
               required: [true, 'please provide your lastName']
          }
     },
     age:{
          type: Number,
          required: [true, 'Please provide your age']
     },
     email:{
          type: String,
          required: [true, 'Please provide your vaild email'],
          trim: true
     },
     isActive: {
          type: Boolean
     },
     hobbies: [String],
     address:{
          street:{
               type: String,
          },
          city:{
               type: String,
               required: true
          },
          country:{
               type: String,
               required: true
          }
     },
     isDelete: {
          type: Boolean,
          default: false
     },
     orders: []

})


userSchema.pre('save', async function(next){

     // eslint-disable-next-line @typescript-eslint/no-this-alias
     const user = this
     user.password = await bcrypt.hash(
          user.password,
          Number(config.bcrypt_saltRounds)
     )
     next()
})

//post save middleware /hook
userSchema.post('save', function(doc, next){
     doc.password=''
     next()
  })
  
  //Query Middleware
  userSchema.pre('find', function(next){
      this.find({isDelete: {$ne: true}});
      next()
  })
  //middleware for findOne 
  userSchema.pre('findOne', function(next){
      this.find({isDelete: {$ne: true}});
      next()
  })
  //middleware for aggregate 
  userSchema.pre('aggregate', function(next){
      this.pipeline().unshift({$match: {isDelete: {$ne: true}}})
      next()
  })


  userSchema.statics.isUserExists = async function (userId: number) {
     const existingUser = await UserModel.findOne({ userId });
     return existingUser;
   };




export const UserModel = model<user, UserStaticModel>('user', userSchema)