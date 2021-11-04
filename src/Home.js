import './Home.css';
import './Demo.js';
import Playlist from './Demo.js'
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Particles from "react-particles-js";


function App() {
    const [handle, setHandle] = useState(" ");
    const [clicked, setClicked] = useState (false);
    const defInput = "Enter a Twitter handle";
    const HandleDemo = async () => {
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
        setClicked(true)
    // window.location = "demo";
    };

    const handleInput = event => {
        if(event.target.value == defInput){
            setHandle("");
        }
        setHandle(event.target.value);
    }

    // async function componentDidMount() {
    //     const response = await fetch('/api/groups');
    //     const body = await response.json();
    //     this.setState({ groups: body, isLoading: false });
    // }

  return clicked? <Redirect to={{
    pathname: '/demo',
    state: {handle: handle}
}}
/>:(
        <div style = {{width: "100vw", height: "100vh"}}>  
            <Particles id="particle-canvas"
            params={{
                particles: {
                    number: {
                        value: 300,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#fff'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 0.3
                    }
                 }    
            }}    
        />
            <div className = "d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                <div>
                <h1 className="title-medium mt-5">saamba</h1>
                    <h2 className="bold">A spotify playlist generator based on your tweets</h2>
                    <div>
                        <input className="handle-input" defaultValue = {defInput} onChange = {handleInput}></input>
                    </div>
                    <div className="text-center">
                        <button className="btn blue" onClick={HandleDemo}>
                            {" "}            
                            Make my playlist{" "}
                        </button>
                    </div>
                </div> 
                    
            </div>
            
            
        </div>
  );
}

export default App;
