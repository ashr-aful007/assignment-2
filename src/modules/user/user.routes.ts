import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.getusers)
router.get('/:userId', userController.getSingleUser)
router.delete('/:userId', userController.deleteSingleUser)
router.put('/:userId', userController.updateSingleUserById)
router.put('/:userId/orders', userController.addUserOrder)
router.get('/:userId/orders', userController.getUserOrder)





export const userRouts = router