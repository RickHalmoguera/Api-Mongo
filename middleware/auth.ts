import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || ''

export const authMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const authHeader = req.header('Authorization')
    if(!authHeader)
        return res.status(401).json({error:true, message: 'No auth header present'})
    const token = authHeader.split('Bearer ')[1]
    try{
        console.log(token)
        console.log(JWT_SECRET)

        const tokenData = jwt.verify(token, JWT_SECRET)
        next()
    } catch(e){
        console.error('JWT Verification Error:', e);
        return res.status(401).json({error:true, message: 'Not authorized'})
    }
}