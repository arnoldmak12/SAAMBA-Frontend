import './Home.css';
import './Demo.js';
import Playlist from './Demo.js'
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import logo from './logo.png';
import Particles from "react-tsparticles";
import Popup from 'reactjs-popup';

function App() {
    const [handle, setHandle] = useState(" ");
    const [clicked, setClicked] = useState (false);
    const defInput = "Enter a Twitter handle";
    const handleDemo = () => {
        // await fetch((url + handle), {mode: 'cors'}).then((res) => {
        //     return fetch (url + handle).then((response) => response.json())
        //     .then((responseJson) => {
        //         setUris(responseJson)
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     })
        // })
        // console.log(uris)
        //setClicked(true)
    // window.location = "demo";
    };

    const handleInput = event => {
        setHandle(event.target.value);
    };



  return clicked? <Redirect to={{
    pathname: '/demo',
    state: {handle: handle}
}}
/>:(
        <div style = {{width: "100vw", height: "100vh"}}>  
            <ParticlesBackground></ParticlesBackground>
            <div className = "d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                <div>
                    <img src={logo} style={{width:"20%", height:"20%"}}/>
                    <h1 className="title-medium mt-5">saamba</h1>
                    <h2 className="bold">A spotify playlist generator based on your tweets</h2>
                    <div>
                        <input className="handle-input" placeholder = "Enter a Twitter handle" onChange = {handleInput}></input>
                    </div>
                    <div className="text-center">
                        
                        <Popup trigger={<button className="btn blue" onClick={handleDemo}>          
                            Make my playlist{" "}
                        </button>} position="right center" modal>
    <div className=".popup-content">Popup content here !!</div>
  </Popup>
                    </div>
                </div> 
              
                    
            </div>
            
            
        </div>
  );
}

class ParticlesBackground extends React.Component{
    render(){
        return <Particles
        id="particle-canvas"
        options={{
            "autoPlay": true,
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 60,
            "manualParticles": [],
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            },
            "particles": {
              "color": {
                "value": "#fff",
              },
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "direction": "bottom",
                "enable": true,
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "speed": 2,
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 400
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0.1,
                  "max": 0.5
                },
              },
              "shape": {
                "type": "circle"
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 1
                },
                "value": {
                  "min": 1,
                  "max": 10
                },
              },
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "zLayers": 100
          }}
      />
    }
}
export default App;
