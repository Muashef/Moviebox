import React, { useState } from 'react'
import TV from '../../assets/svg/tv.svg';
import Menu from '../../assets/svg/menu.svg';
import Searchbar from '../SearcBar';
// import { searchMovies } from '../../utils/SearchMovies';

const Navbar = () => {
    const [query,setQuery]=useState('');
    const [movies,setMovies]=useState([]);

    const searchMovies=async(e)=>{
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
    <div className='w-full flex items-center justify-between px-[80px] pt-4'>
        <div className='flex gap-5 items-center'>
            <img src={TV} alt="tv-icon" />
            <span className='text-2xl font-bold text-white '>MovieBox</span>
        </div>
       <div>
        <Searchbar />
       </div>

        
        <div className='flex items-center gap-3'>
                    <p className='text-white text-base font-bold'>Sign In</p>
                    <span>
                        <img 
                        src={Menu} 
                        alt="menu" 
                        className='cursor-pointer'
                        />
                    </span>
        </div>
    </div>
  )
}

export default Navbar