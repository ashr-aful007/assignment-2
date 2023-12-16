import { Model } from "mongoose";

export type user = {
     userId: number;
     username: string;
     password: string;
     fullName: {
         firstName: string;
         lastName: string;
     };
     age: number;
     email: string;
     isActive: boolean;
     hobbies: string[];
     address: {
         street: string;
         city: string;
         country: string;
     };
     isDelete: boolean;
     orders?:[
            productName: string,
            price: number,
            quantity: number 
     ]
 }


 //for creating static
export interface UserStaticModel extends Model<user>{
    isUserExists(userId:number) : Promise<user | null>
}