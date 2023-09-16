import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import "../App.css";
import { Link } from "react-router-dom";
import BestMovies from '../../assets/svg/best_movies.svg';
import TwoTickets from '../../assets/svg/two_tickets.svg';
import List from '../../assets/svg/List.svg';
import Star from '../../assets/svg/Star.svg';
import Play from '../../assets/svg/big_play.svg';
import Sidebar from "../../components/Sidebar/Sidebar";


const MovieDetails = () => {
  const key = "420ea1ce6b91149d335150a115e26337";
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  function handleSideBar() {
    setSideBar((prevSideBar) => !prevSideBar);
  }

  const activeClass = sideBar ? "block" : "hidden";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    // Update the URL when the `id` changes
    navigate(`/movies/${id}`); // Use navigate instead of history.push
  }, [id, navigate]);

  // Function to format movie runtime in hours and minutes
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Function to format movie release date to a UTC format
  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toUTCString();
  };

    return ( 
        <main className="w-100% md:flex-row flex flex-col">
            <div className="">
                <Sidebar />
            </div>

            <section className="w-[90%] xl:w-[65rem] 2xl:w-[74.875rem] xl:ml-[12.5rem] 2xl:ml-[14.125rem]">
                <div className="md:hidden w-full flex items-end justify-end pr-6 mb-3">
                <i className=" fa fa-bars text-#B91C1C text-7 flex ml-auto cursor-pointer" onClick={handleSideBar}></i>
                </div>
            {/* Movie details */}
                {loading ? (
                    <p className="text-xl text-center animate-ping duration-500">Loading...</p>
                ) : (
              // Display movie details once loading is complete
                <div className="relative xl:w-[70rem] 2xl:w-[74.875rem] h-[28.0625rem]">
                    <div className="w-full relative ">
                      {movie.backdrop_path ?
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                        loading="lazy" 
                        className="w-full h-50 md:h-96 ml-5 rounded-md"/>
                        : <div className="text-xl text-center animate-bounce duration-500">No Image Found</div>
                      }

                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                            <div className="w-[6.875rem] h-[6.875rem] border-2 border-[rgba(232,232,232,0.20)] bg-[rgba(255,255,255,0.35)] rounded-full flex items-center justify-center cursor-pointer">
                                <img src={Play} alt="play_icon" />
                            </div>
                            <p className="text-[#E8E8E8] text-[1.5625rem] font-medium shadow-[0px,2px,4px,rgba(0,0,0,0.25)]">
                                Watch Trailer
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center mx-4">
                        <div className="flex items-center text-3 md:text-4 gap-none md:gap-1 mt-2">
                        <p data-testid="movie-title">{movie?.title}</p>
                        <p>•</p>
                        <p data-testid="movie-release-date">{formatReleaseDate(movie?.release_date)}</p>
                        <p>•</p>
                        <p>PG-13</p>
                        <p>•</p>
                        <p data-testid="movie-runtime">{formatRuntime(movie?.runtime)}</p>
                        
                        </div>

                        <div className="flex items-center justify-between gap-2 text-3 lg:text-4">
                          <div className="flex gap-1 ">
                          <p className="text-#B91C1C ml-4 p-2 lg:px-4 lg:py-2 border-2 border-solid border-#F8E7EB border-rounded-8">Action</p>
                          <p className=" text-#B91C1C p-2 lg:px-4 lg:py-2 border-2 border-solid border-#F8E7EB border-rounded-8">Drama</p>
                          </div>

                            <img src={Star} alt="" className="w-4 md:w-6"/>
                            <p className="text-#E8E8E8">8.5</p>
                            <p> | 350k</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between m-4 gap-2">
                    <p data-testid="movie-overview" className="w-full md:w-65% text-3.5 md:text-xl">{movie?.overview}</p>

                    <div className="w-full md:w-85% flex items-center justify-center flex-col">
                      <button className="w-full md:w-[20rem] xl:w-[33rem] 2xl:w-[22.5rem] h-[3.4375rem] rounded-[0.625rem] bg-[#BE123C] text-white text-[1rem] xl:text-[1.25rem]  font-medium shadow-[0px,2px,4px,rgba(0,0,0,0.20)] flex items-center justify-center gap-3 cursor-pointer lg:mt-7">
                        <img src={TwoTickets} alt="" />
                         <span>See Showtimes</span></button>
                      <button className="w-full md:w-[20rem] xl:w-[33rem] 2xl:w-[22.5rem] h-[3.4375rem] rounded-[0.625rem] bg-[rgba(190,18,60,0.10)] border border-[#BE123C] text-[1rem] xl:text-[1.25rem]  font-medium text-[#333] flex items-center justify-center gap-3 cursor-pointer mt-4">
                         <img src={List} alt="" />
                          <span>More watch options</span></button>
                    </div>
                    </div>

                    <div className="mx-4 flex flex-col md:flex-row">
                      <div className="w-full md:w-65% text-3 md:text-4.5">
                        <p className="mb-4">Director : <span className="text-#BE123C">Joseph Kosinski</span></p>
                        <p className="mb-4">Writers : <span className="text-#BE123C">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                        <p className="mb-4">Stars : <span className="text-#BE123C"> Tom Cruise, Jennifer Connelly, Miles Teller</span></p>

                        <div className="flex items-center mt-16">
                          <button className="w-full md:w-[15.8125rem] h-[3.4375rem] bg-[#BE123C] rounded-[0.625rem] text-white text-[1rem] xl:text-[1.25rem]  font-medium shrink-0">Top rated movie #65</button>
                          <select name="" id="" className="w-full h-[3.4375rem] rounded-[0.625rem] border border-[#C7C7C7] bg-[rgba(255,255,255,0.80)] text-[#333] text-[1rem] xl:text-[1.25rem]  font-medium px-4 flex justify-between items-center outline-none">
                            <option value="">Awards 9 nominations</option>
                          </select>
                        </div>
                      </div>

                      <div className="relative w-full md:w-35% h-50">
                        <img src={BestMovies} alt="" className="w-full h-50" />
                        <div className="absolute bottom-0 rounded-b-2 left-0 right-0 p-3 bg-#12121280 text-white flex items-center">
                          {/* <img src={ListWhite} alt="" /> */}
                          <p className="text-3 md:text-4">The Best Movies and Shows in September</p>
                        </div>
                      </div>

                    </div>

                </div>

                )}
            </section>
        </main>
     );
}
 
export default MovieDetails;