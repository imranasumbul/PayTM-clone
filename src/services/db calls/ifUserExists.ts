import prisma from "@/lib/prisma";
import { UserIDInfo } from "../../db/interfaces/user";
type ifUserExistsIp = Pick< UserIDInfo , "email" >
type Result = 
    | { success: true; data: UserIDInfo }   // success case with user data
    | { success: false; error: string }

export default async function ifUserExists({email} : ifUserExistsIp){
    try{
        const user = await prisma.userIDInfo.findUnique({
            where: {
                email
            }
        })
        if(!user){
            return {success : false, error: `User dooesn't exist in the database`};
        }
        return {success : true, data: user};
    }catch(err : any){
        console.log(`Error ${err}`);
        return { success: false, error: `Database error: ${err.message || err}` };
    }
    
}