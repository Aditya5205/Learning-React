import { useState } from "react";

const ChoiceBox = ({isSelected, value, click}) => {

    let backbg = "";
    if(isSelected){
        backbg = "bg-black text-white rounded-lg";
    }

    console.log()

    return (
        <>
            <div className={`text-2xl border border-black px-4 py-2 cursor-pointer ${backbg}`} onClick={click}>
                {value}
            </div>
            
        </>
    );
};



export default ChoiceBox;