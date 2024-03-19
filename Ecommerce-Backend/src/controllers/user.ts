import { NextFunction, Request } from "express";
import {User} from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async(
    req: Request<{} , {} , NewUserRequestBody>, 
    res:any,
     next:NextFunction,
     ) => {

    try{
        const {name,email,photo,gender,_id,dob} = req.body;
        const user = await User.create({name,
            email,
            photo,
            gender,
           _id,
            dob,
        });
        
        return res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`,
          });
       
        
    } 
    catch(error){}
};
