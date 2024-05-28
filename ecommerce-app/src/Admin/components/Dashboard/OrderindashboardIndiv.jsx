import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton, AvatarGroup, Avatar } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const OrderindashboardIndiv = ({order}) => {
  const [anchorEl, setAnchorEl] = useState(null);

    return (
    <><TableRow key = {order.orderId}>
        <TableCell align="center">
        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
        {order.orderDetails.map((orderDetail) => (
        <Avatar key={orderDetail.productId} src={orderDetail.productImage} alt={orderDetail.productTitle} />
      ))}
        </AvatarGroup>
      </TableCell>
      <TableCell align="center">{order.totalPrice}</TableCell>
      <TableCell align="center">{order.orderStatus}</TableCell>
</TableRow></>
    );
}

// export default OrderInAdmin
