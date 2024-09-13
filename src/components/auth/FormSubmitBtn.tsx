"use client"

import React from "react"

interface FormSubmitBtnProps{
    onClickFunction : () => void
}

export default function FormSubmitBtn({onClickFunction} : FormSubmitBtnProps){
    return (
            <>
                <div className="flex w-[100%] pt-6 justify-center">
                <button onClick={onClickFunction} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
                
               
            </>
        )
}