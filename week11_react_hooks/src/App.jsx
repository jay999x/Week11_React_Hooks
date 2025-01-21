import { useEffect, useState, useRef } from "react";

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
  
  return <div style={{ textAlign: 'center', marginTop: '50px' }}>
    {prevCount}
    <button onClick={()=>{setState(currentCount => currentCount+1)}}>Increase Count</button>
    {state}
    

  </div>
}

export default App;