"use client"

import FormInput from "@/components/auth/FormInput";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormHeading from "@/components/auth/FormHeading";
import FormSubmitBtn from "@/components/auth/FormSubmitBtn"; // Client Component
import FormBottomWarning from "./FormBottomWarning";
const SigninSchema = z.object({
    email: z.string().email().trim().toLowerCase(),
    password: z.string().trim().min(6, {
        message: "Password must contain at least 6 characters"
    }).trim()
})

interface FormValues {
    email: string,
    password: string
}

export default function SignupComponent(){
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(SigninSchema), // Integrate zod schema for validation
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    }

    return (
        <div className="flex bg-blue-500 justify-center items-center min-h-screen">
            <form className="overflow-hidden rounded-2xl w-[50%] lg:w-[40%] xl:w-[30%] flex bg-white flex-col items-start justify-center p-7">
                <FormHeading headingText="Sign In" />
                <FormInput register={register} error={errors.email?.message} labelText="Enter your email" placeholder="abc@gmail.com" type="email" name="email" />
                <FormInput register={register} error={errors.password?.message} labelText="Enter your password" placeholder="*******" type="password" name="password" />
                
                <FormBottomWarning to="/signup" buttonText="Sign up" label="Not a member yet?" />
                {/* Pass the form submission handler to the client-side submit button */}
                <FormSubmitBtn onClickFunction={handleSubmit(onSubmit)} />
            </form>
        </div>
    );
}

