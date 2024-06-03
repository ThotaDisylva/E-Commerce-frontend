import React from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, Typography, Button } from '@mui/material';
import { Category, Height } from '@mui/icons-material';

const FilterSidebar = ({ filters, setFilters, setReset }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleNewestReleases = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortByDate: 1,
    }));
  };
    const reset = () => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortByDate: -1,
        sortByPrice:-1,
        category:'',
        subcategory:''
      }));
      setReset(0);
    };
  // const newRelease = ()=>{
  //   filters.sortByDate=1
  // }

  return (
    <div className="p-2">
      <p className=' font-bold text-xl'>
        Filters
      </p>
      <div>
        <Typography variant="subtitle1">by Price</Typography>
        <hr />
        <RadioGroup
          name="sortByPrice"
          value={filters?.sortByPrice}
          onChange={handleFilterChange}
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Low to High"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="High to Low"
          />
          
        </RadioGroup>
      </div>
      <div className='lg:block h-full flex lg:space-x-0 space-x-2 justify-center'>
      <div className='h-full lg:w-full sm:w-1/2 md:w-5/12 w-1/2 lg:mt-5 text-sm '>
        <button variant="contained" className="w-full rounded-md border border-transparent bg-blue-500 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" sx={{height:'100%'}} onClick={handleNewestReleases}>
          <p className='text-sm sm:text-base'>
            NEWEST FILTERS
          </p>
        </button>
      </div>
      <div className='lg:w-full sm:w-1/2 md:w-5/12 w-1/2 lg:mt-5 h-full'>
        <button className="w-full rounded-md border border-transparent bg-blue-500 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={reset}>
          <p className=' text-sm sm:text-base '>
          RESET FILTERS
          </p>
        </button>
      </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
