import React from 'react'
import soundFile from '../audio/analog-watch.mp3'

const Audio = ({time}) => {
          if(time < 12) {
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

