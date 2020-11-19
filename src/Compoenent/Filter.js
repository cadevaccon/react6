    import React from 'react'
    import MovieList from "./MovieList"
    
    
    function Filter(props) {
       
        const {movies,rate,title}=props
        return (<>
         <MovieList movies={movies.filter((e) => e.rate >= rate &&
            e.title.toLowerCase().includes(title.toLowerCase().trim()))}/>
            
            </>
            
        )
    }
    
    export default Filter
    