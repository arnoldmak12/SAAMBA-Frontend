import React, {useEffect, useState} from "react";
import { Component } from "react";
import { GridLoader } from "react-spinners";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Home.css';
import "./Demo.css";

function Playlist(props) {
    let [loading, setLoading] = useState(true);
    let handle = props.location.state.handle;
    const url = "http://50.19.22.132:8080/getPlaylist/";
    const [uris, setUris] = useState([]);
    useEffect(
      
      async () => {
        await fetch((url + handle), {mode: 'cors'}).then((res) => {
            return fetch (url + handle).then((response) => response.json())
            .then((responseJson) => {
                setUris(responseJson)
                setLoading(false)
            })
            .catch((error) => {
              console.error(error);
            })
        },
        )
      },
      [],
      
    );

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
  
  (
    <div className="d-flex twitter-blue justify-content-center text-center content-body">


      <div className="playlist-container">
      <h1 className = "playlist-ready">Your playlist is ready!</h1>
      {
        uris.map((uri) => 
        {
          return(
          <div className="track-element">
            <iframe style={{display: 'block'}} src = {"https://open.spotify.com/embed/track/" + uri.substring(14)} width="100%" height="80" align = "right" frameBorder="0"
        allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
        fullscreen; picture-in-picture"></iframe>
          
          </div>)
          
        }
        
        // uri =  + uri,
        
        )}
        <div>
                      <button className="btn black" onClick = {() => {window.location = "/"}}>
                                          {" "}
                                          Back to Home{" "}
                                      </button>
                        <button className="btn green">
                            {" "}
                            Add to Spotify{" "}
                        </button>
        </div>
        
        </div>
        
    </div>
    
    // 
  );
}

export default Playlist;
