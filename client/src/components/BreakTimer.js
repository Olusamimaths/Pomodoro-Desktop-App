import React from 'react';

const Timer = ({b_minute, b_second}) => {
    return(
        <div className="break_timer">
           <h3>{b_minute}:{b_second || `00`}</h3>
        </div>
    )
}

export default Timer;