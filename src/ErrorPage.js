import error from './error.jpeg';
function ErrorPage(){
    return(
      <div className = "d-flex twitter-blue justify-content-center align-items-center text-center content-body">
      <div>
          <img className = "error" src={error}/>
          <h2 className="bold">Whoops! No Twitter handle found.</h2>
          <div className="text-center">
              <button className="btn black" onClick={() => { window.location = "/" }}>
                  {" "}            
                  Go back{" "}
              </button>
          </div>
      </div>      
  </div>
    )
    
        
}
export default ErrorPage;