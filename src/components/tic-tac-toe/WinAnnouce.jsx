import React from 'react';

const WinAnnouce = ({isCircleWin, isCrossWin}) => {
    if(isCircleWin)
    return (
        <div className="bg-green-500 text-white text-2xl font-bold p-2 h-fit">
            You Won Circle!!
        </div>
    );
    else if(isCrossWin)
    return (
        <div className="bg-green-500 text-white text-2xl font-bold p-2 h-fit">
            You Won Cross!!
        </div>
    );
};

export default WinAnnouce;