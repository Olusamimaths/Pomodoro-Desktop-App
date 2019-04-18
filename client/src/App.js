import React, { Component } from 'react';
import Timer from './components/Timer';
import Audio from './components/Audio'
import BreakAudio from './components/BreakAudio'
import BreakTimer from './components/BreakTimer'


let timer_var;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      time: 1500,
      the_break: 300,
      minute: 25,
      seconds: 0, 
      b_minute: 5,
      b_second: 0,
      running: false,
      paused: false,
    }
    this.startTheTimer = this.startTheTimer.bind(this);
  }

  incrementWorkMinute = () => {
    if(this.state.running && !this.state.paused){
      console.log("Can't change timer while running")
    } else if(this.state.paused || !this.state.running){
      this.setState((prevState, props) => {
        return {
          time: parseInt(prevState.time) + 60,
          minute: prevState.minute + 1
        }
      })
    }
  }

  decrementWorkMinute = () => {
    if(this.state.running && !this.state.paused){
      console.log("Can't change timer while running")
    } else if(this.state.paused || !this.state.running){
      this.setState((prevState, props) => {
        return {
          time: prevState.time - 60,
          minute: prevState.minute - 1
        }
      })
      
      if(this.state.minute === 0){
        this.setState((prevState, props) => {
          return {
            minute: 0,
            time: 0
          }
        })
      }
    }
  }

  incrementBreakMinute = () => {
    if(this.state.running && !this.state.paused){
      console.log("Can't change timer while running")
    }else if(this.state.paused || !this.state.running){
      this.setState((prevState, props) => {
        return {
          the_break: prevState.the_break + 60,
          b_minute: prevState.b_minute + 1
        }
      })
    }
  }

  decrementBreakMinute = () => {
    if(this.state.running && !this.state.paused){
      console.log("Can't change timer while running")
    }else if(this.state.paused|| !this.state.running){
      this.setState((prevState, props) => {
        return {
          the_break: prevState.the_break - 60,
          b_minute: prevState.b_minute - 1
        }
      })
      if(this.state.b_minute === 0){
        this.setState((prevState, props) => {
          return {
            b_minute: 0,
            the_break: 0
          }
        })
      }
    }
  }

  timer = () => {
        // work time
        let { time } = this.state;
        // break time
        let { the_break } = this.state;
        //run the timer
        timer_var = setInterval(()=>{
          // work time reduction
          if (time > 0){
            this.setState((prevState, props) => {
              return {
                time: prevState.time-1
              }
            })
            time--;
            let second = time%60;
            let min = parseInt(time/60)
            this.setState(() => {
              return {
                  minute: min,
                  seconds: second >= 10 ? second : `0${second}`,
                  running: true
              }
            })
          } else {
            // break time reduction
            if(the_break > 0) {
              this.setState((prevState, props) => {
                return {
                  the_break: prevState.the_break-1
                }
              })
                the_break--;
                let b_sec = the_break%60;
                let b_min = parseInt(the_break/60)
                this.setState((prevState, props) => {
                  return {
                      b_minute: b_min,
                      b_second: b_sec >= 10 ? b_sec : `0${b_sec}`,
                      running: true
                  }
                })
            }

          }


          if(this.state.time === 0 && this.state.the_break === 0){
            this.setState((prevState, props) => {
              return {
                time: 1500,
                the_break: 300,
                count: prevState.count+1,
                running: false
              }
            })
            console.log(this.state.count)
            setTimeout(() => {
              console.log("Restarting the timer...")
              this.startTheTimer()
            }, 2000)
          }
        }, 1000)

  
  }

  startTheTimer(){
    // avoid running multiple timer in a second
    // timer running and not paused
    if(this.state.running && !this.state.paused){
      alert("Timer already running")
      console.log("Nothing to do")
    } else if(this.state.paused) { // timer is paused
      this.timer() 
    } else { // timer not running and not paused
      this.timer()
    }
    this.setState(() => {
      return{
        paused: false
      }
    })
          
  } // end of set interval

  
  pauseTimer = () =>{
    clearInterval(timer_var)
    this.setState( {
      time: this.state.time,
      minute: this.state.minute,
      seconds: this.state.seconds, 
      b_minute: this.state.b_minute,
      b_second: this.state.b_second,
      the_break: this.state.the_break,
      paused: true,
    })
  }


  resetTimer = () =>{
    clearInterval(timer_var)
    this.setState((prevState, props) => {
      return {
        time: 1500,
        minute: 25,
        the_break: 300,
        seconds: 0, 
        b_minute: 5,
        b_second: 0,
        running: false
      }
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <section className="container">
            <div id="work_time">
              <button onClick={this.incrementWorkMinute}>+</button>
                  <Timer minute={this.state.minute} seconds={this.state.seconds} startTheTimer={this.startTheTimer} resetTimer={this.resetTimer} pauseTimer={this.pauseTimer} running={this.state.running}/>
                <button onClick={this.decrementWorkMinute}>-</button>
            </div>
             
            <div id="break_time">
              <button onClick={this.incrementBreakMinute}>+</button>
                  <BreakTimer b_minute={this.state.b_minute} b_second={this.state.b_second} running={this.state.running}/>
                <button onClick={this.decrementBreakMinute}>-</button> 
            </div>
        </section>
        <Audio time={this.state.time} running={this.state.running} paused={this.state.paused}/>
        <BreakAudio the_break={this.state.the_break} running={this.state.running} paused={this.state.paused}/>
      </div>
          
    );
  }
}

export default App;
