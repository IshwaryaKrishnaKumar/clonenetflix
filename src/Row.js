import React,{useEffect, useState} from "react";
import axios  from "./axious";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    // a snippet of code which runs based on a specific condition
    useEffect(()=>{

     async function fetchData(){
       const request=await axios.get(fetchUrl);
       console.log(request);
       setMovies(request.data.results);
       return request;
     }
     fetchData();
     // if we leave emply[] then it run only once,if we pass variable it run each time when movie change

    },[fetchUrl]);
    //show in table
    console.table(movies);

     const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

     const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
      .then(url=>{
        console.log(movie.name);
        const urlParams = new URLSearchParams(new URL(url).search) ;
        setTrailerUrl(urlParams.get('v'));

      }).catch(err => console.log(err))
    }

  }

    return(
        <div className="row">
           <h2>{title}</h2>
           <div className="row_posters">
            {movies.map(movie=>(
                <img
                key={movie.id} 
                onClick={()=>handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}` }
                src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
                 alt={movie.name}/>
            ))}
            </div>
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;