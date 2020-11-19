import React from 'react'
import ReactStars from "react-rating-stars-component";



function Star(props) {
    return (
        <ReactStars 
    count={5}
    value={props.rate}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    edit={props.edit}
  />
    )
}

export default Star
