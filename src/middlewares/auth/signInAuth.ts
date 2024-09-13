import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import ifUserExists from "@/services/db calls/ifUserExists";
import { ApiResponse } from "@/types/api";
import { UserIDInfo } from "../../db/interfaces/user";

export default async function SigninAuth(req: NextApiRequest, res: NextApiResponse<ApiResponse>, next: Function) {
    const { email, password } = req.body;
    try {
        const userResult = await ifUserExists({ email });
        if (userResult.success === false) {
            return res.status(400).json({
                status: "fail",
                message: `${userResult.error}`,
                timestamp: new Date().toISOString(),
            });
        } else if(userResult.success === true && userResult.data) {
            const pass = userResult.data.password;
            if(pass !== password){
                return res.status(400).json({
                    status: "fail",
                    message: `You entered the wrong password`,
                    error: `WrongPasswordError`,
                    timestamp: new Date().toISOString(),
                });
            }
            next();
        }
        next();
    } catch (err) {
        console.log(`Error occurred: ${err}`);
        return res.status(500).json({
            status: "error",
            message: "Server error occurred",
            timestamp: new Date().toISOString(),
        });
    }
}
