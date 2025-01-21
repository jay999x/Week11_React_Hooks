import { useEffect, useState, useRef } from "react";
import useIsOnline from "./useIsonline";
import useDebounce from './useDebounce';

function usePrev(value){

  const ref = useRef()

   useEffect(

    (()=>{
      ref.current = value
    }),[value]
  );

  return ref.current;
  
};

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 2000); // 2000ms = 2 seconds

  // This effect will only run when debouncedSearchTerm changes
  useEffect(() => {
      if (debouncedSearchTerm) {
          // Perform your search or API call here
          console.log('Searching for:', debouncedSearchTerm);
      }
  }, [debouncedSearchTerm]);

  return (
    <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
    />
);
}

function App(){

  const [state, setState]= useState(0)
  const prevCount = usePrev(state);
  const Online = useIsOnline()
  console.log(Online) //returns true
  return <div style={{ textAlign: 'center', marginTop: '50px' }}>
    {prevCount}
    <button onClick={()=>{setState(currentCount => currentCount+1)}}>Increase Count</button>
    {state}
    {SearchComponent()}
   
    

  </div>
}

export default App;