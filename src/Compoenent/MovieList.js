import React from 'react'
import MovieCard from './MovieCard';

import { Link, Route, Switch } from "react-router-dom";
import Trailer from "./Title"

function MovieList(props) {
    
    const {movies}=props
    return (
        < >
            {movies.map((e,i)=>
            <div className="col-3" style={{padding:"10px"}}>
                  <MovieCard e={e} logo={e.picture} i={i}/>
            </div>
            
            )}
            
    </>
    )
}

export default MovieList
