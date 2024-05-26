import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import useSearchPage from '../../../../hooks/useSearchPage';

const SearchBar = ({filters, setFilters}) => {
  const [key, setKey] = useState('');
  var k;
  // const {fetchSearchData,products,setProducts}=useSearchPage(filters);
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleSearch = (event) => {
    k = event.target.value
    setFilters((prevFilters) => ({
      ...prevFilters,
      keyword:k
      
    }));
  };
  // const handleClick = async() => {
  //   fetchSearchData;
  // };
  return (
      <div className='flex items-center w-full h-10 rounded bg-[#F1F2F4] py-1 px-3'>
        <input placeholder='Search for items...' value={filters.keyword} onChange={handleSearch} type='text' className='border-0 outline-none h-9 text-base w-full bg-[#F1F2F4]'/>
        <div className='ml-2'>
          <div>
          <Link to={"/search"} state={{fromSearchBar:{filters:filters}}}>
            <SearchIcon/>
            </Link>
            </div>
        </div>
      </div>
  )
}

export default SearchBar;