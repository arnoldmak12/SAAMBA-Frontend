import React, {useEffect, useState} from "react";
import { GridLoader } from "react-spinners";
import "./Demo.css";

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
      <div className="d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                
          <iframe src="https://open.spotify.com/embed/playlist/0uDRLbIwYKGesH0x9iQoT7" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
  );
}

export default App;
