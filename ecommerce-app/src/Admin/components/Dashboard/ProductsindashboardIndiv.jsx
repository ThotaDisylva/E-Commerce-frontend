import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Updateproduct} from '../Products/Updateproduct';
import initialState from "../productsReducer";

export const ProductsindashboardIndiv = ({onUpdate}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("Delivered");

    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const handleUpdateClick = () => {
    setOpenUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
  };

  const handleProductUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
    handleCloseUpdateDialog();
  };

    const handleDelete = () => {
        onDelete(); 
    };

    return (
        <>
             {initialState.products.map(product => (
                <TableRow key={product.id}>
                  <TableCell align="right" ><img src={product.image} alt="product image" style={{ maxWidth: '50px', maxHeight: '50px',borderRadius:'50%' }}/></TableCell>
                  <TableCell align="right">{product.title}</TableCell>
                  <TableCell align="right">{product.category}</TableCell>
                  <TableCell align="right">{product.subCategory}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                </TableRow>
               ))}
            <hr />
        </>
    );


}


