import React,{useState,useEffect} from 'react'
import {Pagination} from '@mui/material'





const Test = () => {
    /* Add Value Start*/
    
     
    /* Add Value End */

    /* counter start */ 
    const [count, setCount] = useState(0)

    const clickerplus = () => {
        setCount(count+1)
    }
    const clickerminus = () => {
        setCount(count-1)
    }
    /* Counter End */
    return (
        <div>
            {/* Counter Start */}
            <p>Count</p>
            <p>{count}</p>
            <button onClick = {clickerplus}>+</button>
            <button onClick = {clickerminus} disabled = {count === 0}>-</button>
            {/*Counter Ends */}
            

            {/*Add Value Starts */}
            <input type = 'number' onChange={(e)=> setCount(Math.abs(e.target.value))}></input>
            {/* <button onSubmit = {addValue}></button> */}
            {/*Add Value Ends */}  
            <Pagination 
            count={10} 
            variant="outlined" 
            shape="rounded" 
                
            />          
        </div>
    )
}

export default Test
