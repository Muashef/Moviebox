import { useState } from 'react';

export default function SearchMovies(){
    const searchMovies = async(e) => {
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
    return (
      <>
        <form className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            type in your movie here
          </label>
          <input
            type="text"
            className="input"
            name="query"
            placeholder="What do you want to watch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            search
          </button>
        </form>
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div className="card" key={movie.id} movie={movie}>
                <img
                  className="card--image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + " poster"}
                />
               <div className="card-content">
                  <h3 className="card--title">{movie.title}</h3>
                  <p>
                    <small>date:{movie.release_date}</small>
                  </p>
                  <p>
                    <small>IMDB :{movie.vote_average}</small>
                  </p>
                  {/* <p className="card-desc">{movie.overview}</p> */}
                </div>
              </div>
            ))}
        </div>
      </>
    );
}