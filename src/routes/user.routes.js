//import all files and modules. 
import express from 'express';
import UserController from '../controllers/user.controller.js';

//Initialize Express router.
const userRouter = express.Router();

const userController = new UserController(); 

//Routes to controller methods.
userRouter.get('/', userController.getIndexView);
userRouter.get('/register', userController.getRegistrationPage);
userRouter.get('/login', userController.getLoginPage);
userRouter.post('/register',userController.signup);
userRouter.post('/login', userController.signin);
userRouter.get('/logout', userController.logout);

export default userRouter;
