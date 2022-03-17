import React from 'react'
import { Rating } from '@mui/material';


const MovieCard = ({movie}) =>  {
  return (
    <div>
   <div class="movie_card" id={movie.id} style={{backgroundImage: `url(${movie.second_img})`}}>
     <div class="info_section">
     <div class="movie_header">
      <img class="locandina" src={movie.main_img}/>
      
      <h1>{movie.title}</h1>
      <Rating
          readOnly
          name="simple-controlled"
            value={movie.rate}
         />
            
       <br/>
      <h4>{movie.date}</h4>
      <span class="minutes"></span>
      <p class="type">{movie.duration}<span> minutes</span></p>
     </div>
    <div class="movie_desc">
      <p class="text">
       {movie.description}
      </p>
    </div>
   
     </div>
     </div>
     </div>
    
    
  ) 
}

export default MovieCard