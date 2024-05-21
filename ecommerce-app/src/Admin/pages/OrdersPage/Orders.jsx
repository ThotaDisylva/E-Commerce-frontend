import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrderInAdmin from '../../components/Orders/OrderInAdmin';
// import OrderInAdmin from '../components/Orders/OrderInAdmin';

export const Orders = () => {
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
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      title: "Samsung2",
      price: 1000
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      title: "Samsung3",
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
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Update</TableCell>
            {/* <TableCell align="center">Delete</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderInAdmin orders = {orders}/>
          <OrderInAdmin orders={orders}/>
          <OrderInAdmin orders={orders}/>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
)
}
// export default Orders
