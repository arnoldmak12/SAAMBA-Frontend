import React, {useEffect, useState} from "react";
import { GridLoader } from "react-spinners";
import "./Demo.css";
import {Link } from "react-router-dom";
function App() {
    let [loading, setLoading] = useState(true);

    useEffect(
      () => {
        let timer1 = setTimeout(() => setLoading(false), 3000);
  
        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
          clearTimeout(timer1);
        };
      },
      // useEffect will run only one time with empty []
      // if you pass a value to array,
      // like this - [data]
      // than clearTimeout will run every time
      // this value changes (useEffect re-run)
      []
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
  ) : (
  <div>
      <div className="d-flex twitter-blue justify-content-center align-items-center text-center">
                
          <iframe src="https://open.spotify.com/embed/playlist/0uDRLbIwYKGesH0x9iQoT7" width="100%" height="600" frameBorder="0" transparency="true" allow="encrypted-media"></iframe>

      </div>
      <div className="d-flex twitter-blue justify-content-center align-items-center text-center" >
              <p style={{marginTop: "50px"}}>
                <Link to ="/"><button className="btn-blue"> Try Another Twitter Profile! </button>
                </Link>
                <button style={{marginLeft: "50px"}} className="btn-blue"> Add this playlist to my Spotify account </button>
              </p>
      </div>
  </div>


  );
}

export default App;
