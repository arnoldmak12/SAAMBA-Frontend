function ErrorPage(){
    return(
    
    <div>
        <h1>
        Whoops. No twitter handle found.
    </h1>,
    <button className="btn black" onClick={() => { window.location = "/" }}>
    {" "}
    Back to Home{" "}
  </button>
  </div>)
    
        
}
export default ErrorPage;