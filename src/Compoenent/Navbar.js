import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";

function Navbar(props) {
  

    return (
        
       <div style={{padding:"50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4">
        <input type="text" onChange={(e)=>props.s(e.target.value)}
          style={{borderRadius:"5px"}}
        />
        </div>
        {/* <select  name="dropdown" onChange={(e)=>setRate(e.target.value)}> */}
        <div className="col-4">
        <ReactStars 
    count={5}
     onChange={props.ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></div>
  </div>
  </div>

        </div>
    )
}

export default Navbar
