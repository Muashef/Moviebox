import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "420ea1ce6b91149d335150a115e26337";
    const BASE_URL = "https://api.themoviedb.org/3";
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185"; // Adjust image size as needed

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setShowResults(false);
            return;
        }

        setLoading(true);
        setError(null);

        const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;

        axios.get(searchUrl)
            .then((response) => {
                const movies = response.data.results.slice(0, 5); // Limit to the top 5 results
                setResults(movies);
                setShowResults(true);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative md:w-[32.8125rem]">
            <form class="flex items-center w-full">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input 
                    type="text" 
                    class="bg-transparent border-2 border-[#D1D5DB] text-white text-md rounded-md block w-full p-1.5 outline-none" 
                    placeholder="What do you want to watch?" 
                    required 
                    value={query}
                    onChange={handleInputChange}
                     />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </form>
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <p>Loading...</p>
                </div>
            )}

            {error && <p>Error: {error.message}</p>}
            {showResults && !loading && !error && (
                <div className="absolute mt-2 w-full bg-white border border-[#D1D5DB] rounded-md shadow-md">
                    <ul>
                        {results.map((movie) => (
                            <li key={movie?.id} className="flex items-center p-2 border-b">
                                <Link to={`/movies/${movie?.id}`}>
                                    {movie.poster_path ?
                                    <img
                                        src={`${POSTER_BASE_URL}${movie?.poster_path}`}
                                        alt={movie?.title}
                                        className="w-16 h-16"
                                    />
                                    : <div className='text-4 text-center animate-bounce duration-500'>No Image Found</div>
                                    }
                                    <p className="text-black ml-2">{movie?.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Searchbar;