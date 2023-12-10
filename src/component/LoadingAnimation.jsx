

function LoadingAnimation(){
  return (
    <center className="loading">
      <div className="spinner-border m-5 " style={{width: "5rem", height: "5rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>  
    </center>
  )
}

export default LoadingAnimation