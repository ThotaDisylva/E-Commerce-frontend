import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { ProductsindashboardIndiv } from './ProductsindashboardIndiv';

export const Productsindashboard = () => {
  // const dispatch=useDispatch();
  // const {products} = useSelector(store=>store);
//   const {products} = useSelector(state=>state.products);
//   const handleDelete = () => {
//     onDelete(); // Call the onDelete callback passed from the parent component
// };

  // console.log("Products -----",products)

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
    // dispatchEvent(findProducts(data))
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
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Sub-Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <ProductsindashboardIndiv/>
              <ProductsindashboardIndiv/>
              <ProductsindashboardIndiv/>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
  )
}

// export default Products
