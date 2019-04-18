import React from 'react'
import soundFile from '../audio/analog-watch.mp3'

const Audio = ({time, paused, running}) => {
          if(time < 12 && running && !paused) {
            return (
              <div>
                <audio  src={soundFile}  autoPlay />
              </div>
            )
          } else if(time === 0) {
            return(<div></div>)
          } else {
            return (<div></div>)
          }
}

export default Audio;

