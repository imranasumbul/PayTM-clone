import prisma from "@/lib/prisma";
import { UserIDInfo } from "../../db/interfaces/user";
type createUserIp = Pick< UserIDInfo , "email" | "password" | "username">
export default async function createUser({email, password, username} : createUserIp){
    try{
        await prisma.userIDInfo.create({
            data: {
                email,
                password,
                username
            }
        })
    }catch(err){
        console.log(`Error ${err}`);
    }
    
}