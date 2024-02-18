import React from 'react';

const Box = ({handleClick, isCircle, isCross, isSelected}) => {

    let backbg = "";
    if(isSelected){
        if(isCross){
            backbg = "bg-cross bg-no-repeat bg-cover bg-center";
        }
        else if(isCircle){
            backbg = "bg-circle bg-no-repeat bg-cover";
        }
    }

    return (
        <div className={`box border-black h-20 w-20 rounded-xl ${backbg}`} 
        onClick={handleClick}>
        </div>
    );
};

export default Box;