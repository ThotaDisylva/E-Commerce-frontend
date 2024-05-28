import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrderInAdmin from '../../components/Orders/OrderInAdmin';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {fetchOrders} from '../../../hooks/UseOrdersSlice'


export const Orders = () => {
  const {orders, status, error} = useSelector((state) => state.orders);
  const dispatch=useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
    }
  }, [status,dispatch]);
  
 
  return (
    <div className="w-full bg-white" >
        <div className='font-bold text-3xl text-center'>Orders</div>
        <hr />
        <div className='max-w-full mx-auto'>
      <TableContainer component={Paper} className='w-full' >
      
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.map((order) => (
            <OrderInAdmin key={order?.orderId} order = {order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
)
}
// export default Orders
