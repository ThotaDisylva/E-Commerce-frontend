import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Updateproduct} from './Updateproduct';
import initialState from "../productsReducer";

export const ProductInAdmin = ({product,onUpdate}) => {
    const [anchorEl, setAnchorEl] = useState(null);

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
                  <TableCell align="center" ><img src={product.image} alt="product image" style={{ maxWidth: '50px', maxHeight: '50px' ,borderRadius:'50%'}}/></TableCell>
                  <TableCell align="center">{product.title}</TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.subCategory}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>
                  <TableCell align="center">
                    {/* <Button variant="contained" onClick={handleUpdateClick}>Update</Button> */}
                    <Updateproduct
                        open={openUpdateDialog}
                        onClose={handleCloseUpdateDialog}
                        product={product}
                        onUpdate={handleProductUpdate}
                        readOnly = {false} 

                    />
                    </TableCell>
                  <TableCell align="center"><Button variant="contained" onClick={handleDelete}>Delete</Button></TableCell>
                </TableRow>
               ))}
            <hr />
        </>
    );


}


