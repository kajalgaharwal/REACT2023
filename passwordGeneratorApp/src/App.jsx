import { useRef } from 'react';
import { useEffect } from 'react';
import { useState,useCallback } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator= useCallback(()=>{
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numbersAllowed){
      str+='1234567890';
    }
    if(charactersAllowed){
      str+= ",./[])(*&^%$#@!";
    }
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+= str.charAt(char);
    }
    setPassword(pass);

  },[length,numbersAllowed,charactersAllowed])

 useEffect(()=>{
  passwordGenerator()
 },[setLength,numbersAllowed,charactersAllowed,passwordGenerator])
  
const passwordRef = useRef(null);
const passwordCopyToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,4);
  window.navigator.clipboard.writeText(password)
},[password])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {passwordRef}
        />
        <button
        onClick={passwordCopyToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>{
          setLength(e.target.value)
         }}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={numbersAllowed}
          onChange={()=>{
            setNumbersAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charactersAllowed}
              onChange={()=>{
                setCharactersAllowed((prev)=>!prev)
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
    </>
  )
}

export default App
