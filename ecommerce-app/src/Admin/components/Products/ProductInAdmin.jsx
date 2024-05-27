import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Updateproduct} from './Updateproduct';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../hooks/UseProductsSlice";

export const ProductInAdmin = ({product,onUpdate}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

    const dispatch = useDispatch();

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

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updatedProduct(updatedProduct));
    handleCloseUpdateDialog();
  }
    const handleDelete = () => {
        dispatch(deleteProduct(product.productId));
        window.location.reload();
    };

    return (
        <>
             {/* {initialState.products.map(product => ( */}
                <TableRow key={product.id}>
                  <TableCell align="center" ><img src={product.imageUrl} alt="product image" style={{ maxWidth: '50px', maxHeight: '50px'}}/></TableCell>
                  <TableCell align="center">{product.title}</TableCell>
                  <TableCell align="center">{product.categoryName}</TableCell>
                  <TableCell align="center">{product.subCategoryName}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.quantityAvailable}</TableCell>
                  <TableCell align="center">
                    {/* <Button variant="contained" onClick={handleUpdateClick}>Update</Button> */}
                    <Updateproduct
                        // open={openUpdateDialog}
                        // onClose={handleCloseUpdateDialog}
                        product={product}
                        onUpdate={handleUpdateProduct}
                        // readOnly = {false} 
                    />
                    </TableCell>
                  <TableCell align="center"><Button variant="contained" onClick={handleDelete}>Delete</Button></TableCell>
                </TableRow>
               
               {/* ))} */}
            <hr />
        </>
    );


}
export default ProductInAdmin;


