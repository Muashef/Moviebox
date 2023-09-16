import React from 'react'
import Play from '../../assets/svg/Play.svg';
import Tomato from '../../assets/svg/tomato.svg';
import Imdb from '../../assets/svg/imdb.svg';
import Navbar from '../NavBar/Navbar';

const Hero = () => {
  return (
    <div className='w-full min-h-screen hero'>
        <Navbar />
        <div className='w-full flex justify-between px-8 md:px-[80px] py-16 md:py-28'>
            <div>
                <h2 className='text-2xl md:text-7xl text-white font-bold md:leading-[68px]'>
                    John Wick 3 : <br /> Parabellum
                </h2>
                <div className="flex gap-4 mt-[14px] lg:mt-[29px]">
                    <div className="flex gap-2">
                        <img src={Imdb} alt="imdb" />
                        <p className="text-sm text-white">86/100</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={Tomato} alt="tomato" />
                        <p className="text-sm text-white">97%</p>
                    </div>
                </div>
                <div className='w-full md:w-[26%] mt-8'>
                    <p className='text-white text-sm'>
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p>
                </div>
                <button className='bg-[#BE123C] py-3 px-5 rounded-md flex items-center gap-3 mt-6'>
                    <img src={Play} alt="watch-icon" />
                    <span className='text-white font-bold text-md'>WATCH TRAILER</span>
                </button>
            </div>
            <div className="hidden md:flex flex-col justify-center gap-[10px] text-[12px] lg:text-base text-white">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    </div>
  )
}

export default Hero