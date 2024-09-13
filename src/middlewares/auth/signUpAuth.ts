import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import ifUserExists from "@/services/db calls/ifUserExists";
import { ApiResponse } from "@/types/api";
import { UserIDInfo } from "@prisma/client";
type ReturnTypeOfIfUserExists = { success: boolean; data: UserIDInfo} | { success: boolean; error: string }

export default async function SignupAuth(req : NextApiRequest, res : NextApiResponse<ApiResponse>, next : Function){
    const { email, password, username} = req.body;
    try{
        const user: ReturnTypeOfIfUserExists = await ifUserExists(email);
        if(user.success !== false){
            return res.status(400).json({
                status: "fail",
                message: "User already exists. Try signing in to your account.",
                error: "DuplicateEmailError",
                timestamp: new Date().toISOString(),
            })
        }
        next();
    }catch(err){
        console.log(`Error occured ${err}`);
        return res.status(500).json({
            status: "error",
            message: "Server error occurred",
            timestamp: new Date().toISOString(),
        });
    }

}