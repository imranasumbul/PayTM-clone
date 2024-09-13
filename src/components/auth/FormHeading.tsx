import React from "react"

interface FormHeadingProp {
    headingText: string
}
export default function FormHeading({headingText} : FormHeadingProp){
    return (
            <>
                <div className="w-[100%] text-center text-blue-800 text-3xl font-bold justify-center">
                    {headingText}
                </div>
                
               
            </>
        )
}