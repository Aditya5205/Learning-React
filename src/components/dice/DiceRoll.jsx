
const DiceRoll = ({click, compInput}) => {
    return (
        <>
            <div className="max-w-xs mt-20">
                <img className="cursor-pointer" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fdice%2Fdice_PNG54.png&f=1&nofb=1&ipt=55d6d0127d53238aead5770eb49821b4f16938450db4b0f5df678f7590b0a46c&ipo=images" alt="dice img" onClick={click}/>
            </div>
            <div className="bg-gray-300 text-xl rounded-xl p-3 ml-10">
                Computer <br/>Chose: {compInput}
            </div>
            
            
        </>
    );
};

export default DiceRoll;