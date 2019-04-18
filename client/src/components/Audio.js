import React from 'react'
import soundFile from '../audio/analog-watch.mp3'

const Audio = ({startAlarm}) => {
     //let sound = new Audio(soundFile)
     if(startAlarm) {
      return (
        <div>
          <audio  src={soundFile}  autoPlay />
        </div>
      )
     } else {
       return(<div></div>)
     }
    
}

export default Audio;

