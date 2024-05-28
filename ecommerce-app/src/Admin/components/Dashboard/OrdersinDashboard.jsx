import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderindashboardIndiv } from './OrderindashboardIndiv';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchOrders } from '../../../hooks/UseOrdersSlice';


export const OrdersinDashboard = () => {
  const {orders, status, error} = useSelector((state) => state.orders);
  const dispatch=useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
    }
  }, [status,dispatch]);


  return (
    <div className="w-full" >
        <div className='font-bold text-3xl text-center'>Orders</div>
        <hr />
        <div className='max-w-full mx-auto'>
      <TableContainer component={Paper} className='w-full' >
      
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.slice(0,3).map((order) => (
          <OrderindashboardIndiv key = {order?.orderId} order = {order}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
)
}
// export default Orders
