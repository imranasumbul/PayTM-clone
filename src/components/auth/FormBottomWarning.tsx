import Link from 'next/link';
import React from "react"

interface BottomWarningInterface {
    label: string,
    buttonText: string,
    to: string
}
function BottomWarning({label, buttonText, to} : BottomWarningInterface){
    return (
        <>
        <div className="w-full m-3 flex justify-center">

        
            <span className="text-sm">{label}</span>
            <Link href={to} className="text-sm underline text-blue-700 font-bold"> 
                {buttonText}
            </Link>
        </div>
        </>
    )
}

export default React.memo(BottomWarning);