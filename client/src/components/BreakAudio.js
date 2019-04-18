import React from 'react'
import soundFile from '../audio/analog-watch.mp3'

const BreakAudio = ({the_break}) => {
          if(the_break < 12) {
            return (
              <div>
                <audio  src={soundFile}  autoPlay />
              </div>
            )
          } else {
            return(<div></div>)
          }
}

export default BreakAudio;

