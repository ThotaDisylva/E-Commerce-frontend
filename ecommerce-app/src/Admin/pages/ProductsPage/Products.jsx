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

export const Products = () => {
  // const dispatch=useDispatch();
  // const {products} = useSelector(store=>store);
//   const {products} = useSelector(state=>state.products);
//   const handleDelete = () => {
//     onDelete(); // Call the onDelete callback passed from the parent component
// };


  useEffect(() => {
    const data={
      category:'Mobile',
      minPrice:100,
      maxPrice:1000,
      minDiscount:10,
      sort:"price_low",
      pageNumber:1,
      pageSize:10,
      stock:"90"
    }

  })
  return (
      <div className="w-full" >
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
       
              <ProductInAdmin/>
              <ProductInAdmin/>
              <ProductInAdmin/>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
  )
}