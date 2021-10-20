import './Home.css';
import './Demo.js';
import Playlist from './Demo.js'
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function App() {
    const [handle, setHandle] = useState(" ");
    const [clicked, setClicked] = useState (false);
    const [uris, setUris] = useState([]);
    const url = "http://50.19.22.132:8080/getPlaylist/";
    const HandleDemo = async () => {
        await fetch((url + handle), {mode: 'cors'}).then((res) => {
            return fetch (url + handle).then((response) => response.json())
            .then((responseJson) => {
                setUris(responseJson)
            })
            .catch((error) => {
              console.error(error);
            })
        })
        console.log(uris)
        setClicked(true)
    // window.location = "demo";
    };

    const handleInput = event => {
        setHandle(event.target.value);
    }

    // async function componentDidMount() {
    //     const response = await fetch('/api/groups');
    //     const body = await response.json();
    //     this.setState({ groups: body, isLoading: false });
    // }

  return clicked? <Redirect to={{
    pathname: '/demo',
    state: { uris: uris }
}}
/>:(
    <div>
            <div className="d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                <div>
                    <h1 className="title-medium mt-5">saamba</h1>
                    <h2 className="bold">A spotify playlist generator based on your tweets</h2>
                    <h3 className="px-3">
                        Enter your twitter handle
                    </h3>
                    <input className="handle-input" onChange = {handleInput}>
                    </input>
                    <div className="text-center">
                        <button className="btn-blue" onClick={HandleDemo}>
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
