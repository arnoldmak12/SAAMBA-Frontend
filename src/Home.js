import './Home.css';
import React from "react";

function App() {
    const handleDemo = () => {
        window.location = "demo";
    };
  return (
    <div>
            <div className="d-flex twitter-blue justify-content-center align-items-center text-center content-body">
                <div>
                    <h1 className="title-medium mt-5">saamba</h1>
                    <h2 className="bold">A spotify playlist generator based on your tweets</h2>
                    <h3 className="px-3">
                        Enter your twitter handle
                    </h3>
                    <input className="handle-input"></input>
                    <div className="text-center">
                        <button className="btn-blue" onClick={handleDemo}>
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
