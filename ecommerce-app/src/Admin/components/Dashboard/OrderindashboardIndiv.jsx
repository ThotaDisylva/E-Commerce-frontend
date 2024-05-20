import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton, AvatarGroup, Avatar } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const OrderindashboardIndiv = ({orders}) => {
    const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
  const [anchorEl, setAnchorEl] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("Confirmed");

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const handleStatusSelect = (status) => {
      setSelectedStatus(status);
      setAnchorEl(null);
  };
    const handleDelete = () => {
        onDelete(); 
    };

    return (
    <><TableRow>
            <TableCell align="left">
                <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                    {orders.map((order, index) => (
                        <Avatar key={index} src={order.image} alt={order.title} />
                    ))}
                </AvatarGroup>
            </TableCell>
            <TableCell align="left">
                {orders.map((order, index) => (
                    <React.Fragment key={index}>
                        <p>{order.title}</p>
                    </React.Fragment>
                ))}
            </TableCell>
            <TableCell align="left">{orders.map((order) => order.id)}</TableCell>
            <TableCell align="left">{totalPrice}</TableCell>

            {/* <TableCell align="right">
                <span className={`text-white px-5 py-2 
                $(order.selectedStatus===" CONFIRMED"?"bg-yellow":
                order.selectedStatus===" SHIPPED"?"bg-blue":
                order.selectedStatus===" DELIVERED"?"bg-green":}`
             }/>
                {selectedStatus}
            </span></TableCell> */}
            <TableCell align="left">{selectedStatus}</TableCell>
</TableRow></>
    );
}

// export default OrderInAdmin
