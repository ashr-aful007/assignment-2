import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/get-all-users', userController.getusers)
router.get('/:userId', userController.getSingleUser)
router.delete('/:userId', userController.deleteSingleUser)
router.put('/:userId', userController.updateSingleUserById)






export const userRouts = router