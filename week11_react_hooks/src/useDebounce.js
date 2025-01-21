import { useState, useEffect } from "react";

export default function useDebounce(value){

    const[debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{const timeout = setTimeout(() => {
        setDebouncedValue(value);
    }, 200)
   return () =>{
    clearTimeout(timeout)
   }

} , [value])

return debouncedValue;

}