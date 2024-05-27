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
import { ProductInAdmin } from '../../components/Products/ProductInAdmin';
import { fetchProducts } from '../../../hooks/UseProductsSlice';


export const Products = () => {
  const dispatch=useDispatch();
  const {products, status, error} = useSelector((state) => state.products);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'failed') {
  //   return <div>Error: {error}</div>;
  // }


  return (
      <div className="w-full bg-white" >
        <div className='font-bold text-3xl text-center'>Products</div>
        <hr />
        <div className='max-w-full mx-auto'>
      <TableContainer component={Paper} className='w-full' >
      
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Sub-Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Update</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {products && products.map((product) => (
              <ProductInAdmin key={product.id} product={product}/>
            ))}
              {/* <ProductInAdmin/>
              <ProductInAdmin/>
              <ProductInAdmin/> */}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
  )
}