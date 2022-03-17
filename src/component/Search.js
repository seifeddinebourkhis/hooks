import { Rating } from '@mui/material';
import React from 'react';


const Search = ({search, rating, setRating}) => {

  return (
    <div>
      <navbar class="nav"><h1> App Movie </h1>
        <input type="text" placeholder='search movie'onChange={(e)=>search(e.target.value)}/>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        </navbar>
    </div>
  )
}

export default Search