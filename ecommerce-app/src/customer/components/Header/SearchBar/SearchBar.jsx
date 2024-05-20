import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
      <div className='flex items-center w-full h-10 rounded bg-[#F1F2F4] py-1 px-3'>
        <input placeholder='Search for items...' type='text' className='border-0 outline-none h-9 text-base w-full bg-[#F1F2F4]'/>
        <div className='ml-2'>
            <SearchIcon/>
        </div>
      </div>
  )
}

export default SearchBar