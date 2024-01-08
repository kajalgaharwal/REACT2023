import { useState } from 'react'

function App() {
  let [counter,setCounter] = useState(10);
   const increaseValue = ()=>{
    if(counter<20){
      setCounter(counter+1);
    }
      
   }
   const decreaseValue = ()=>{
    if(counter>0){
      setCounter(counter-1);     
    }
    
   }
  return (
    <>
      <h2>counter : {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
