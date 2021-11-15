import React, { useEffect, useState } from "react";
import { Component } from "react";
import { GridLoader } from "react-spinners";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Home.css';
import "./Demo.css";
import Popup from 'reactjs-popup';

var axios = require('axios').default;

function Playlist(props) {
  let [loading, setLoading] = useState(true);
  let handle = props.location.state!=null ? props.location.state.handle : "";
  const url = "http://50.19.22.132:8080/getPlaylist/";
  const storage = localStorage.getItem("uris");
  const [emptyStorage, setEmptyStorage] = useState(storage ==null);
  const [uris, setUris] = useState(emptyStorage? [] : storage.substring(2, storage.length-2).split('","'));
  const [error, setError] = useState(false);

  useEffect(() => {
    // var result = "";
    if(emptyStorage){
      async function f(){
        await fetch((url + handle), { mode: 'cors' }).then((res) => {
          return fetch(url + handle).then((response) => response.json())
            .then((responseJson) => {
              if (res.status == 200) {
                setUris(responseJson);
                setLoading(false);
              }
              else {
                setError(true);
                setLoading(false);
              }
            })
            .catch((error) => {
              console.error(error);
            })
        },
        )
      
    }
    return f();
    }
    else{
      setLoading(false);
    }
     
    }
  );
  
  // error ? 
  return loading ? (
    <div>

      <div className="loading-container">
        <GridLoader color={"#1ED760"} size={100} />
      </div>

      <div className="loading-text-container">
        <h1>Curating Custom Playlist</h1>
      </div>

    </div>
  ) :
 
    error?
    <Redirect to={{
      pathname: '/error'
    }}> </Redirect>:
    (
      <div className="d-flex twitter-blue justify-content-center text-center content-body">
        <div className="playlist-container">
          {/* <h1 className = "playlist-ready">Your playlist is ready!</h1> */}
          <h1 className="title-medium mt-5" style={{ color: "#1ED760" }}>Your playlist is ready!</h1>

          {
            uris.map((uri) => {
              return (
                <div className="track-element">
                  <iframe style={{ display: 'block' }} src={"https://open.spotify.com/embed/track/" + uri.substring(14)} width="100%" height="80" align="right" frameBorder="0"
                    allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
        fullscreen; picture-in-picture"></iframe>
                </div>)
            }

              // uri =  + uri,

            )}
          <div class="float-container">
            <div class="float-child">
              <button className="btn black" onClick={() => { window.location = "/"; localStorage.removeItem("uris");}}>
                {" "}
                Back to Home{" "}
              </button>
            </div>

            <div class="float-child">
              <button className="btn green" onClick={() => { 
              localStorage.setItem("uris", JSON.stringify(uris)); 
              var link = "http://localhost:3005/login?uris=" + uris;
              window.location = link
              axios.get(link);
              }}>
                {" "}
                Add to Spotify{" "}
              </button>
            </div>


          </div>

        </div>

      </div>

      // 
    )
}

export default Playlist;
