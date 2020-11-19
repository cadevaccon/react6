import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import Star from "./Star"

function Title({match,data}) {
    var movie = data.find(p=>p.title===match.params.title)
    return (
        <div>
         {console.log(match.params)}
           <h2> <Link to="/">Home</Link><br/></h2>
          <h2>  {movie.title}</h2>
          <div style={{paddingLeft:"46%"}} > <Star rate={movie.rate} edit={false}/></div>

          <iframe width="727" height="409" src={movie.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div style={{textAlign:"center"}}> 
            {movie.descrip}
          </div>
        </div>
    )
}

export default Title
