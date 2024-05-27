import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import initialState from "../productsReducer";
import { useDispatch } from "react-redux";

export const ProductsindashboardIndiv = ({product}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("Delivered");

    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setOpenUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
  };


    return (
        <>
             {/* {initialState.products.map(product => ( */}
                <TableRow key={product.id}>
                  <TableCell align="right" ><img src={product.imageUrl} alt="product image" style={{ maxWidth: '50px', maxHeight: '50px'}}/></TableCell>
                  <TableCell align="right">{product.title}</TableCell>
                  <TableCell align="right">{product.categoryName}</TableCell>
                  <TableCell align="right">{product.subCategoryName}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.quantityAvailable}</TableCell>
                </TableRow>
               {/* ))} */}
            <hr />
        </>
    );


}


