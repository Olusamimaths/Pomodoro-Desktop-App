import React from 'react'

const WorkButton = ({incrementWorkMinute, decrementWorkMinute}) => {
    return(
        <div>
            <button onClick={incrementWorkMinute}>+</button>
            <button onClick={decrementWorkMinute}>-</button> 
        </div>
        
    )
}

export default WorkButton;