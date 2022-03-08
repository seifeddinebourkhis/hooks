import React from 'react'


const MovieCard = (Movie) => {
  return (
    <div>
   <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"alt='' src={Movie.main_img}/>
      <h1>{Movie.tittle}</h1>
      <h4>{Movie.date}</h4>
      <span class="minutes"></span>
      <p class="type">{Movie.duration}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
       {Movie.description}
      </p>
    </div>
   
  </div>
  <div class="blur_back bright_back"></div>
</div>
    </div>
    
  )
}

export default MovieCard