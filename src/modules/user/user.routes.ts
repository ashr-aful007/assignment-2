import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/get-all-users', userController.getusers)







export const userRouts = router