import React, { useState } from 'react';
import axios from 'axios';
const useSearchPage=()=>{
    console.log("Inside useSearchPage");
    const [products, setProducts] = useState([]);
    const fetchSearchData = async (filters) => {
        console.log("More Inside");
        console.log(filters);
        try {

          var url = `http://localhost:8080/auth/SearchProduct?`;
          if(filters.keyword!=''){
            url=url+`keyword=${filters.keyword}`;
          }
          if(filters.category!=''){
            if(url[url.length-1]=='?'){
              url=url+`category=${filters.category}`;
            }
            else{
              url=url+`&category=${filters.category}`;
            }
          }
          if(filters.subcategory!=''){
            if(url[url.length-1]=='?'){
              url=url+`subcategory=${filters.subcategory}`;
            }
            else{
              url=url+`&subcategory=${filters.subcategory}`;
            }
          }
          if(filters.sortByDate!=-1){
            if(url[url.length-1]=='?'){
              url=url+`sortByDate=${filters.sortByDate}`;
            }
            else{
              url=url+`&sortByDate=${filters.sortByDate}`;
            }
          }
          if(filters.sortByPrice!=-1){
            if(url[url.length-1]=='?'){
              url=url+`sortByPrice=${filters.sortByPrice}`;
            }
            else{
              url=url+`&sortByPrice=${filters.sortByPrice}`;
            }
          }
          console.log(url);
          const response = await fetch(url);
          const data = await response.json();
        
          setProducts(data.searchProductInfoResponses);
        }
         catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      return {products, fetchSearchData}

}
export default useSearchPage;