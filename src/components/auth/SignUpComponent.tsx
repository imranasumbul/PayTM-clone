"use client"

import FormInput from "@/components/auth/FormInput";

import { useForm } from 'react-hook-form';
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSubmitBtn from "@/components/auth/FormSubmitBtn";
import FormHeading from "@/components/auth/FormHeading";
import FormBottomWarning from "./FormBottomWarning";

const SignUpSchema = z.object({
    email: z.string().email().trim().toLowerCase(),
    password: z.string().trim().min(6, {
        message: "Password must contain at least 6 characters"
    }).trim(),
    username: z.string().trim().min(4, {
        message: "Username must contain at least 4 characters"
    })
})

interface FormValues {
    email: string,
    password: string,
    username: string
}
export default function SignupComponent(){
    const form = useForm<FormValues>({
        resolver: zodResolver(SignUpSchema), // Integrate zod schema for validation
      });;
    const {register, handleSubmit, formState: { errors }} = form;
    
    const onSubmit = (data : FormValues) => {
        console.log(data);
    }
    return (
        <>
        <div className="flex bg-blue-500 justify-center items-center min-h-screen">
            <form className="overflow-hidden rounded-2xl w-[50%] lg:w-[40%] xl:w-[30%] flex bg-white flex-col items-start justify-center p-7">
                <FormHeading headingText="Sign Up" />
                <FormInput register={register} error={errors.email?.message} labelText="Enter your email" placeholder="abc@gmail.com" type="email" name="email"/>
                <FormInput register={register} error={errors.password?.message} labelText="Enter your password" placeholder="*******" type="password" name="password"/>
                
                <FormInput register={register} error={errors.username?.message} labelText="Enter your username" placeholder="Johnny" type="text" name="username"/>
                

                <FormBottomWarning to="/signin" buttonText="Sign in" label="Already a member?" />
                <FormSubmitBtn onClickFunction={handleSubmit(onSubmit)} />
                
            </form>
        </div>
        </>
    )
}

