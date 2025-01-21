import { useEffect, useState, useRef } from "react";
import useIsOnline from "./useIsonline";

function usePrev(value){

  const ref = useRef()

   useEffect(

    (()=>{
      ref.current = value
    }),[value]
  );

  return ref.current;
  
};

function App(){

  const [state, setState]= useState(0)
  const prevCount = usePrev(state);
  const Online = useIsOnline()
  console.log(Online) //returns true
  return <div style={{ textAlign: 'center', marginTop: '50px' }}>
    {prevCount}
    <button onClick={()=>{setState(currentCount => currentCount+1)}}>Increase Count</button>
    {state}
   
    

  </div>
}

export default App;