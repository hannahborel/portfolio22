import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  
      const textRef = useRef()
       useEffect( () => {
            init(textRef.current, {
                   showCursor: true, 
                   backDelay: 1500,
                   backspeed: 60,
                   strings: [' Developer', ' Desinger', ' Creator' ],
                   });
             }, [] )
      return (
            <div className="intro" id="intro">
                  <div className="left">
                        <div className="imgContainer">
                              <img src="assets/portrait.png" alt="portrait"/>
                        </div>
                  </div>
                  <div className="right">
                        <div className="wrapper">
                              <h2> Hi There, I'm</h2>
                              <h1>Hannah Borel</h1>
                              <h3>Freelance<span ref={textRef}></span></h3>
                        </div>
                        <a href="#portfolio">
                              <img src="assets/down.png" alt="down arrow" />
                        </a>
                  </div>
            
            </div>
      )
}
