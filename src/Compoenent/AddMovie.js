import React,{useState}  from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import plus from "../plus.png"
import ReactStars from "react-rating-stars-component";
import { Link, Route, Switch } from "react-router-dom";

function AddMovie(props) {

    var [title, setTitle] = useState("")
    var [descrip, setDescrip] = useState("")
    var [rate, setRate] = useState("")

    var [picture] = useState("z")
    const addingTitle=(x)=>setTitle(title=x)
    const addingDescrip=(x)=>setDescrip(descrip=x)
    // const addingRate=(x)=>setRate(rate=x)
    const ratingChanged = (newRating) => {
        setRate(rate=newRating) 
      }
      let movie;
      const adding=()=>{      movie = {title,descrip,rate,picture}

        props.x(movie)
    }
    return (
        <>
             <Flippy 
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizental" 
      style={{ width: '169px', height: '210px' }} 
    >
      <FrontSide
        style={{ backgroundColor:"#ffffff" }}
      >
        {/* <img src={logo} style={{width:"130px",height:"165px"}}/> */}
        <img src={plus} style={{width:"90px"}} alt="" />
        <h2>Add Movie</h2>
       
     
      </FrontSide>
      <BackSide
        style={{ backgroundColor: ' #cccccc'}}>
            Title :
            <input type="text" style={{width:"120px"}} onChange={(e)=>addingTitle(e.target.value)}/>
            {/* <select  name="dropdown" onChange={(e)=>addingRate(e.target.value)} > */}

            {/*  this is for the stars*/ }
        <div style={{paddingLeft:"15px"}} >   
         <ReactStars 
    count={5}
     onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </div>
  { /* done */ }
  Description
  <textarea style={{width:"120px"}} onChange={(e)=>addingDescrip(e.target.value)}/>
  <br/>
      <button onClick={()=>adding(title,descrip,rate,picture)}>ADD</button >
      </BackSide>
    </Flippy>   
        
        </>
    )
}

export default AddMovie
