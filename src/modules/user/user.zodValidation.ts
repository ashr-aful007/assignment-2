import { z } from "zod";

export const UserValidationSchema = z.object({
  userId: z.number().refine((val:number) => val > 0, {
    message: 'Please provide a valid userId',
  }),
  username: z.string().trim().min(1, {
    message: 'Please provide your name',
  }),
  password: z.string().min(8, {
    message: 'Please provide a valid strong password',
  }),
  fullName: z.object({
    firstName: z.string().min(1, {
      message: 'Please provide your first name',
    }),
    lastName: z.string().min(1, {
      message: 'Please provide your last name',
    }),
  }),
  age: z.number().refine((val:number) => val > 0, {
    message: 'Please provide a valid age',
  }),
  email: z.string().email({
    message: 'Please provide a valid email',
  }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string().optional(),
    city: z.string().min(1, {
      message: 'Please provide a valid city',
    }),
    country: z.string().min(1, {
      message: 'Please provide a valid country',
    }),
  }),
});

export default UserValidationSchema
