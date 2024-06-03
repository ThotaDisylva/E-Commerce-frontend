import React, { useState } from "react";
import { Box, Button, Typography, Popover, List, ListItem, ListItemButton } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Updateproduct} from './Updateproduct';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../hooks/UseProductsSlice";

export const ProductInAdmin = ({product,onUpdate,onDelete}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

    const dispatch = useDispatch();
    const [showDeletePopup, setShowDeletePopup] = useState(false);

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
    // const handleDelete = () => {
    //     dispatch(deleteProduct(product.productId));
    //     window.location.reload();
    // };

    const handleDelete = () => {
      setShowDeletePopup(true);
    };
  
    const confirmDelete = () => {
      setShowDeletePopup(false);
      dispatch(deleteProduct(product.productId));
      window.location.reload();
      // deleteUser();
    };
  
    const cancelDelete = () => {
      setShowDeletePopup(false);
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
        {showDeletePopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete your account?</p>
            <div className="flex space-x-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
               {/* ))} */}
            <hr />
        </>
    );


}
export default ProductInAdmin;


