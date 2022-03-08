import './App.css';
import MoviesList from './component/MoviesList';
import React , { useState } from 'react';

function App() {
  const [movies,setMovies] = useState ([

  {
    id : 1,
    main_img:"https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg" ,
    title:"jumanji",
    duration:"117min",
    date:"2017",
    rate:4,
    genre:"action,crime,fantasy",
    description:" Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for"
},
{   id : 2,
    main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title:"Tomb Raider",
    duration:"125min",
    date:"2018",
    rate:4,
    genre:"action,,fantasy",
    description:" Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared"
},
{   id : 3,
  main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
  title:"Black Panther",
  duration:"134min",
  date:"2018",
  rate:3,
  genre:"action,adventure",
  description:" Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for"
},

  ])
  return (
    <div className="App">
    
     <MoviesList movies={movies} />

    </div>
  );
}

export default App;
