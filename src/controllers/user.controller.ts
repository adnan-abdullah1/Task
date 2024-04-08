import axios from 'axios';
import { Response, Request, NextFunction } from "express";
import User from '../schemas/user.model';
import httpStatus from 'http-status';
import authService from '../services/auth.service';

const dashboard = async (req: Request, res: Response,next:NextFunction) => {
  const options = {
    method: 'GET',
    url: `https://www.arbeitnow.com/api/job-board-api`,
  };
  try {
    const response = await axios.request(options);
    return res.json({ ...response.data });
  } catch (error) {
    next(error)
  }
}

const profile = async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const {userId}=req.params;
    const user =await authService.profile(userId);
    if(!user){
      return res.status(httpStatus.NOT_FOUND).json({message:"User not found"});
    }
    return res.json({message:"Profile",data:{...user}});
  }
  catch(err){
    next(err);
  }
}
const apis = { dashboard, profile };
export default apis;
