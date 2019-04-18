import React from 'react'

const BreakButton = ({incrementBreakMinute, decrementBreakMinute}) => {
    return(
        <div>
            <button onClick={incrementBreakMinute}>+</button>
            <button onClick={decrementBreakMinute}>-</button> 
        </div>
        
    )
}

export default BreakButton;