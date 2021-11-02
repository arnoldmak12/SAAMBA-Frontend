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
        <div className = "background">  
            <div className="d-flex justify-content-center align-items-center text-center content-body">
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
