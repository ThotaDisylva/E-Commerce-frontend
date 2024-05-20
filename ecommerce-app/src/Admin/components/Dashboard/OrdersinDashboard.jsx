import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderindashboardIndiv } from './OrderindashboardIndiv';

export const OrdersinDashboard = () => {
  const orders = [
    {
      id: 10,
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      title: "Samsung",
      price: 100000
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      title: "Samsung1",
      price: 1000
    }
  ];
  return (
    <div className="w-full" >
        <div className='font-bold text-3xl text-center'>Orders</div>
        <hr />
        <div className='max-w-full mx-auto'>
      <TableContainer component={Paper} className='w-full' >
      
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            {/* <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderindashboardIndiv orders = {orders}/>
          <OrderindashboardIndiv orders={orders}/>
          <OrderindashboardIndiv orders={orders}/>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
)
}
// export default Orders
