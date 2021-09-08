import React from "react";

function App() {
    const handleDemo = () => {
        window.location = "demo";
    };
  return (
    <div>
            <div className="d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                <iframe src="https://open.spotify.com/embed/playlist/0uDRLbIwYKGesH0x9iQoT7" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
  );
}

export default App;
