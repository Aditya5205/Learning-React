import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = '';

    if(isNum) str += '123456789';
    if(isChar) str += '!@#$%^&*+_-{}[]`';

    for (let i = 0; i < length; i++) {
      let randInd = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randInd);
    }

    setPassword(pass);

  }, [isChar, isNum, length, setPassword])

  useEffect(() => {passwordGenerator()}, [length, isChar, isNum, passwordGenerator])

  const passRef = useRef(null);

  const copyToClip = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className="w-full h-screen bg-black py-6">
        <div className="text-red-600 text-center w-full bg-gray-600 max-w-xl mx-auto rounded-2xl p-2">

        <div className="text-3xl my-3">Password Generator</div>

        <div className="px-3 flex mb-4">
          <input 
            className="h-8 w-full max-w-xl text-red-600 outline-none rounded-l-lg indent-2" type="text" 
            placeholder="Password is here!" 
            value={password} 
            ref={passRef}
            readOnly
          />

          <button className="outline-none rounded-r-lg bg-blue-500  text-white px-4 py-0.5 " 
          onClick={copyToClip}>Copy</button>

        </div>
        <div className="flex mx-3 mb-4 gap-2">
          <input
            type="range"
            className="flex items-center cursor-pointer"
            min={8}
            max={24}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>

          <input 
            type="checkbox"
            className="ml-12"
            onChange={() => {
              setIsNum(prev => !prev)
            }}
          />
          <label>Numbers</label>
          
          <input 
            type="checkbox"
            className="ml-4"
            onChange={() => {
              setIsChar(prev => !prev)
            }}
          />
          <label>Characters</label>

        </div>
        </div>

      </div>
    </>
  )
}

export default App
