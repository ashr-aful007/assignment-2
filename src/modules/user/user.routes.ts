import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/get-all-users', userController.getusers)
router.get('/:userId', userController.getSingleUser)
router.delete('/:userId', userController.deleteSingleUser)
router.put('/:userId', userController.updateSingleUserById)
router.put('/:userId/orders', userController.addUserOrder)
router.get('/:userId/orders', userController.getUserOrder)





export const userRouts = router