import React from 'react'
import soundFile from '../audio/analog-watch.mp3'

const BreakAudio = ({the_break, paused, running}) => {
          if(the_break < 12 && running &&!paused) {
            return (
              <div>
                <audio  src={soundFile}  autoPlay />
              </div>
            )
          } else if(the_break === 0 || paused) {
            return(<div></div>)
          }else {
            return (<div></div>)
          }
}

export default BreakAudio;

