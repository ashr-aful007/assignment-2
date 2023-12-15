import { Schema, model } from 'mongoose';
import { user } from './user.interface';

export const userSchema = new Schema<user>({
     userId: {
          type: Number,
          required: [true, 'Please provide userId']
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

export const UserModel = model<user>('user', userSchema)