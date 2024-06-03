import FilterSidebar from '../../components/Search/FilterSidebar';
import ProductCardSearch from '../../components/Search/ProductCardSearch';
import React, { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import useSearchPage from '../../../hooks/useSearchPage';
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  const [reset,setReset]=useState(1);
  const location = useLocation();
  const {fromSearchBar}=location.state==undefined?{fromSearchBar:{filters:{
    keyword: '',
    category: '',
    subcategory:'',
    sortByPrice: -1,
    sortByDate: -1,
  }, subcategory:""}}:location.state;

  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    subcategory:'',
    sortByPrice: -1,
    sortByDate: -1,
  });
  filters.keyword=fromSearchBar.filters.keyword;
  if(reset==1){
  filters.subcategory=fromSearchBar.subcategory;
  console.log(filters);
  }
  if(reset==0){
    fromSearchBar.subcategory='';
    setReset(1);
  }
  
  
  const productsPerPage = 10;
  const {products, fetchSearchData} = useSearchPage();
  const [currentPage, setCurrentPage] = useState(1);
  var indexOfLastProduct = currentPage * productsPerPage;
  var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  var currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const [pageCount,setPageCount] = useState(1);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log("Inside");
    const fetchData=async()=>{
      await fetchSearchData(filters);
    }
    fetchData();
    indexOfLastProduct = currentPage * productsPerPage;
    indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    setPageCount(Math.ceil(products.length / productsPerPage));
  }, [filters.keyword,filters.category,filters.subcategory,filters.sortByDate, filters.sortByPrice, products.length]);
  return (
      <div className=''>
      <div className="lg:flex mt-12 space-y-2 lg:space-y-0" >
        <div className=' lg:w-1/5 w-full bg-white h-fit py-3 lg:mx-3 rounded-lg'>
          <FilterSidebar filters={filters} setFilters={setFilters}  reset={reset} setReset={setReset}/>
        </div>
        <div className="product-list lg:w-4/5 w-full" p={2}>
          {currentProducts.map((product, index) => (
            <Box key={index} mb={2}>
              <ProductCardSearch product={product} />
            </Box>
          ))}
          {pageCount > 1 && (
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={pageCount}
                page={currentPage}
              onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage