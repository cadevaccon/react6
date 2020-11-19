import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ReactStars from "react-rating-stars-component";
import { Link, Route, Switch } from "react-router-dom";
import Star from "./Star"
import Trailer from "./Title"

function MovieCard(props) {
  
  
    const {e,i,logo}=props
    return (
      
        <div>
         
         <Flippy key={e.title}
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizental" 
      style={{ width: '169px', height: '210px' }} 
    >
      <FrontSide
        style={{ backgroundColor:"rgba(191, 218, 129, 0.466)"
        }}
      >
        <img src={logo} style={{width:"130px",height:"160px"}} alt={e.title}/>
        <br/><div style={{paddingLeft:"15px"}} >
        <Star rate={e.rate} edit={false}/>
        </div>
      </FrontSide>
      <BackSide
        style={{ backgroundColor: ' #c77854'}}>
        <h3 >{e.title}</h3>
      <span > {e.descrip}</span><br/>
      <span> Rate : {e.rate} </span><br/>

      <Link to={`/Trailer/${e.title}`}>Watch Trailer</Link>

      </BackSide>
    </Flippy>   
        </div>
    )
}

export default MovieCard
