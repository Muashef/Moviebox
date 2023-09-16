import { useState } from 'react';

export const searchMovies=async(e)=>{
        e.preventDefault();
       const url = `https://api.themoviedb.org/3/search/movie?api_key=22e617eaf32d7796682e402089d50a48&language=en-US&query=${query}&page=1&include_adult=false`;
      try {
         const res = await fetch(url);
         const data = await res.json();
         console.log(data.results)
         setMovies(data.results)
      } catch (error) {
        console.log(err)
      }
    }
