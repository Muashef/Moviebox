import React from 'react'
import FB from '../../assets/svg/fb.svg'
import IG from '../../assets/svg/ig.svg'
import Twitter from '../../assets/svg/twitter.svg'
import YT from '../../assets/svg/youtube.svg'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-28 mb-10'>
        <div className='flex items-center gap-8 cursor-pointer'>
            <img src={FB} alt="facebook" />
            <img src={IG} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={YT} alt="youtube" />
        </div>
        <div className='flex items gap-3 md:gap-9 mt-8'>
            <div className='text-[#111827] text-sm md:text-lg font-bold cursor-pointer'>
                Conditions of use
            </div>
            <div className='text-[#111827] text-sm md:text-lg font-bold cursor-pointer'>
                 Privacy & Policy
            </div>
            <div className='text-[#111827] text-sm md:text-lg font-bold cursor-pointer'>
                Press Room
            </div>
        </div>
        <p className='text-[#6B7280] font-bold text-base md:text-lg mt-8'>
        © 2021 MovieBox by Muashef 
        </p>
    </div>
  )
}

export default Footer