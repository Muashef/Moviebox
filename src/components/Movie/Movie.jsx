// import React from 'react'
// import RightArr from '../../assets/svg/right-arr.svg';

// const Movie = () => {
//   return (
//     <div className='w-full h-full px-14 pt-10 bg-white'>
//         <div className='flex items-center justify-between'>
//           <h1 className='text-4xl font-bold text-black'>Featured Movie</h1>
//           <div className='flex items-center gap-3 cursor-pointer text-lg text-[#BE123C] font-medium'>
//             See More
//             <span>
//               <img src={RightArr} alt="right-arrow" />
//             </span>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Movie



import React, { useEffect, useState } from 'react';
// import Tomato from './PngItem_1381056 1.png'
// import Imbd from './MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import Tomato from '../../assets/svg/tomato.svg';
import Imdb from '../../assets/svg/imdb.svg';
import RightArr from '../../assets/svg/right-arr.svg';
import { Link } from 'react-router-dom'


const Movie = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '22e617eaf32d7796682e402089d50a48';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          const topRatedMoviesSlice = data.results.slice(0, 10);
          setTopRatedMovies(topRatedMoviesSlice);
          setLoading(false);
        } else {
          setError('Invalid API response format');
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='pt-[50px] px-[50px] '>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {/* <h2 className='text-2xl pb-[50px] font-bold'>Featured Movies</h2> */}
          <div className='flex items-center justify-between pb-8'>
           <h1 className='text-4xl font-bold text-black'>Featured Movie</h1>
           <div className='flex items-center gap-3 cursor-pointer text-lg text-[#BE123C] font-medium'>
             See More
             <span>
              <img src={RightArr} alt="right-arrow" />
             </span>
           </div>
         </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRatedMovies.map((movie) => (
              <div key={movie.id} className='h-full'>
                <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  loading="lazy" 
                  alt=""
                  className="w-full relative"
                  data-testid="movie-poster"
                />
                </Link>
                <div className="mt-4">
                  <p className='text-lg text'>{movie.logo_path}</p>
                  <h3 className="text-lg text-black font-semibold">{movie.title}</h3>
                </div>
                <div className='flex items-center gap-6 pb-4 pt-4'>
              <div className='flex'>
                <img src={Imdb} alt="" />
                <p className='text-black text-sm pl-2 '>{movie.popularity}</p>
              </div>

              <div className='flex items-center'>
                <img src={Tomato} alt="" />
                <p className='text-black text-sm pl-2 '>97%</p>
              </div>
            </div>

            <div className='pb-5'>
              <p className='md:text-sm text-xs opacity-[0.4] font-bold'>Release Date (UTC): {movie.release_date}</p>
              
            </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
