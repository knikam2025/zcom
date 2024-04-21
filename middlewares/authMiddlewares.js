import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

//protected Route token base

export const requiredSignIn = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      // Check if Authorization header is present
      if (!token) {
        return res.status(401).send({
          success: false,
          message: "Authorization header is missing"
        });
      }
  
      // Verify JWT token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      // Handle JWT verification errors
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).send({
          success: false,
          message: "Invalid token"
        });
      }
      // Handle token expiration errors
      if (error.name === 'TokenExpiredError') {
        return res.status(401).send({
          success: false,
          message: "Token has expired"
        });
      }
      // Handle other unexpected errors
      res.status(500).send({
        success: false,
        message: "Internal server error",
        error: error.message
      });
    }
  };


//admin acceess

export const isAdmin = async(req, res, next) => {

    try {
        const user = await userModel.findById(req.user._id);
            if(user.role != 1){
                return res.status(401).send({
                    sucess:false,
                    message:"UnAthorized Access"
                });
            }
            else{
                    next();
                }
            
        
    } catch (error) {
        
        console.log(error);
        res.send(401).send({
            sucess: false,
            error,
            message: "error in admin"
        })
    }
}




