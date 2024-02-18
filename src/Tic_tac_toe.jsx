import React, { useEffect, useState } from 'react';
import Box from './components/tic-tac-toe/Box';
import WinAnnouce from './components/tic-tac-toe/WinAnnouce';

const Tic_tac_toe = () => {

    const [turn, setTurn] = useState(true);
    const [selected, setSelected] = useState(["","","","","","","","",""]);
    const [crossWin, setCrossWin] = useState(false);
    const [cirlceWin, setCircleWin] = useState(false);

    const arr = [0,1,2,3,4,5,6,7,8];
    
    const arraychunk = (arr) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, 3));
        return chunks;
    };

    const playMove = (value) => {
        if(!crossWin && !cirlceWin){
            const temp = [...selected];
            
            if(temp[value] === ''){
                if(turn)
                    temp[value] = 'x';
                else
                    temp[value] = 'o';
            }

            setSelected(temp);

            setTurn(t => !t);
        }
    }

    const winCondition = () => {

        if(
        (selected[0]===selected[1] && selected[1]===selected[2] && selected[1]==='x') ||
        (selected[3]===selected[4] && selected[4]===selected[5] && selected[4]==='x') || 
        (selected[6]===selected[7] && selected[7]===selected[8] && selected[7]==='x') || 
        (selected[0]===selected[3] && selected[3]===selected[6] && selected[3]==='x') || 
        (selected[1]===selected[4] && selected[4]===selected[7] && selected[4]==='x') || 
        (selected[2]===selected[5] && selected[5]===selected[8] && selected[5]==='x') || 
        (selected[0]===selected[4] && selected[4]===selected[8] && selected[4]==='x') || 
        (selected[2]===selected[4] && selected[4]===selected[6] && selected[4]==='x'))
            setCrossWin(true);

        if(
        (selected[0]===selected[1] && selected[1]===selected[2] && selected[1]==='o') ||
        (selected[3]===selected[4] && selected[4]===selected[5] && selected[4]==='o') || 
        (selected[6]===selected[7] && selected[7]===selected[8] && selected[7]==='o') || 
        (selected[0]===selected[3] && selected[3]===selected[6] && selected[3]==='o') || 
        (selected[1]===selected[4] && selected[4]===selected[7] && selected[4]==='o') || 
        (selected[2]===selected[5] && selected[5]===selected[8] && selected[5]==='o') || 
        (selected[0]===selected[4] && selected[4]===selected[8] && selected[4]==='o') || 
        (selected[2]===selected[4] && selected[4]===selected[6] && selected[4]==='o'))
            setCircleWin(true);
    }

    useEffect(winCondition, [turn])

    const reset = () => {
        setSelected(["","","","","","","","",""]);
        setTurn(true);
        setCircleWin(false);
        setCrossWin(false);
    }

    let backg = "bg-gray-300";
    if(crossWin || cirlceWin)
        backg = "bg-green-500"

    return (
        <>
        <div className="w-full h-screen bg-gray-500 bg-cover bg-no-repeat flex flex-wrap justify-center items-center">
            <div className="text-center">
                <div className={`h-fit w-fit rounded-xl ${backg}`}>
                    <div className="grid grid-rows-3 gap-1 p-3">
                        <WinAnnouce isCircleWin={cirlceWin} isCrossWin={crossWin}/>
                        {arraychunk(arr).map((col, c) => (
                            <div key={c} className="grid grid-cols-3 gap-1">
                            {col.map((val) => (
                                <Box
                                key={val}
                                handleClick={() => playMove(val)}
                                isCross={selected[val] === 'x'}
                                isCircle={selected[val] === 'o'}
                                isSelected={selected[val] !== ''}
                                />
                            ))}
                            </div>
                        ))}
                    <div className="text-center text-xl">Click on a box</div>
                    </div>
                </div>
                <button className='bg-gray-300 mt-4 rounded-xl hover:bg-blue-500 hover:text-white py-2 px-3 text-xl' onClick={reset}>
                    Reset
                </button>
            </div>
            


        </div>

            
        </>
    );
};

export default Tic_tac_toe;