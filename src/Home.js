import './Home.css';
import React, {useState} from "react";
function App() {
    const [handle, setHandle] = useState(" ");
    const url = "http://localhost:8080/getPlaylist/";
    const HandleDemo = () => {
        fetch((url + handle), {mode: 'cors'}).then((res) => {
            if(res.status == 200){window.open(url + handle);
            return fetch(url + handle).then((response) => response.json())
            .then((responseJson) => {
              //return songs and artists
            })
            .catch((error) => {
              console.error(error);
            })
    }})
        
        //window.location = "demo";
    };

    const handleInput = event => {
        setHandle(event.target.value);
    }

    // async function componentDidMount() {
    //     const response = await fetch('/api/groups');
    //     const body = await response.json();
    //     this.setState({ groups: body, isLoading: false });
    // }

  return (
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
