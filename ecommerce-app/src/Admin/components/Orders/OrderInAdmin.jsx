import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton, AvatarGroup, Avatar } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import updateOrderService from "../../../hooks/UseUpdateOrder";

const OrderInAdmin = ({order}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState({
      orderStatus:''
    });

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const handleStatusSelect = async(status) => {
      setSelectedStatus(status);
      try{
        const setSelectedStatus = await updateOrderService().updateOrder({
          orderStatus:status
        },order.orderId)
        window.location.reload();
      }catch(error){
        console.error(error);
      }
  };

    return (
<>
    <TableRow key={order.orderId}>
      <TableCell align="center">
        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
        {order.orderDetails.map((orderDetail) => (
        <Avatar key={orderDetail.productId} src={orderDetail.productImage} alt={orderDetail.productTitle} />
      ))}
        </AvatarGroup>
      </TableCell>
      <TableCell align="center"><p>
      {order.orderDetails.map((orderDetail) => (
      <p key={orderDetail.productId}>{orderDetail.productTitle}</p>
    ))}
        </p></TableCell>
      <TableCell align="center">{order.orderId}</TableCell>
      <TableCell align="center">{order.totalPrice}</TableCell>
      <TableCell align="center">{order.orderStatus}</TableCell>
      <TableCell align="center">
            <Button variant="contained" onClick={handleClick}>Status</Button>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}>
              <List>
                {['Confirmed', 'Shipped', 'Delivered'].map((status) => (
                  <ListItem key={status} disablePadding>
                    <ListItemButton onClick={() => handleStatusSelect(status)} value={status} variant="outlined">
                      <Typography>{status}</Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Popover>
          </TableCell>

    </TableRow>
</>
    );
}

export default OrderInAdmin
