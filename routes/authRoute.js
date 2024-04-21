import express from 'express';
import {
    loginController,
     registerController, 
     testController
    } from "../controllers/authController.js"
import { isAdmin, requiredSignIn } from '../middlewares/authMiddlewares.js';


// router object

const router = express.Router();

// register || post method

router.post("/register" , registerController );

//login || post route

router.post("/login", loginController)

//test route
router.get("/test",requiredSignIn, isAdmin, testController )

export default router;