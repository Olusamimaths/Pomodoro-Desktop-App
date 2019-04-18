import React from 'react';


const Timer = ({minute, seconds, startTheTimer, resetTimer, pauseTimer, running}) => {
    return(
        <div className="timer">
        
           <h1>{minute}:{seconds || `00`} </h1>
           {running == false ?
           <button onClick={startTheTimer} className="btn start">START</button>
           :
           (<div>
               
            <button onClick={resetTimer} className="btn">RESET</button>
           <button onClick={pauseTimer} className="btn">PAUSE</button>
           <button onClick={startTheTimer} className="btn">RESUME</button>
           </div>)}
        </div>
    )
}

export default Timer;