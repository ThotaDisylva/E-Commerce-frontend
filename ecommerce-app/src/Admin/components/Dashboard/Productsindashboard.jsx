import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { ProductsindashboardIndiv } from './ProductsindashboardIndiv';
import { fetchProducts } from '../../../hooks/UseProductsSlice';

export const Productsindashboard = () => {
  const dispatch=useDispatch();
  // const {products} = useSelector(store=>store);
  const {products,status,error} = useSelector((state)=>state.products);

  useEffect(() => {
    if (status === 'idle'){
      dispatch(fetchProducts());
    }
  },[status,dispatch]);
  
  return (
      <div className="w-full" >
        <div className='font-bold text-3xl text-center'>Products</div>
        <hr />
        <div className='max-w-full mx-auto'>
      <TableContainer component={Paper} className='w-full' >
      
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Sub-Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {products && products.slice(0,3).map((product) => (
                <ProductsindashboardIndiv key={product.id} product={product}/>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
  )
}

// export default Products
