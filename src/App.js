import './App.css';
import MoviesList from './component/MoviesList';
import React , { useState } from 'react';
import Search from './component/Search';

function App() {
  const [keysearch,setkeysearch] = useState ("")
  const [newRate,setNewRate] = useState (1)
  const [movies,setMovies] = useState ([
    
    {
      id : 1,
      main_img:"https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" ,
      second_img:"https://www.lemagducine.fr/wp-content/uploads/2018/01/Bright-will-smith-joel-edgerton-critique.jpg",   
      title:"Bright",
      duration:"117",
      date:"2017",
      rate:5,
      genre:"action,crime,fantasy",
      description:" Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for"
  },
  {   id : 2,
      main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      second_img: "https://cdn.wallpapersafari.com/5/71/aj8RZ3.jpg",
      title:"Tomb Raider",
      duration:"125",
      date:"2018",
      rate:4,
      genre:"action,,fantasy",
      description:" Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared"
  },
  {   id : 3,
    main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
    second_img: "https://wallpaperscave.com/images/thumbs/download/1280x720/18/02-28/movies-black-panther-22824.jpg",
    title:"Black Panther",
    duration:"134",
    date:"2018",
    rate:3,
    genre:"action,adventure",
    description:" Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for"
  },

  ])
  const search=(text)=>{
    setkeysearch(text)
  }
  const setRate =(rate)=>{
    setNewRate(rate)
  }
  const addMovie =(movie)=>{
    setMovies(movies.concat(movie))
  }
  const [rating,setRating]=useState(0)
  return (
    <div className="App">
         
         <Search search={search} rating={rating} setRating={setRating}/>
         <MoviesList setMovies={setMovies} movies={movies} rating={rating} keysearch={keysearch} />

    </div>
  );
}

export default App;
