import React, { useState } from "react";
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import  updateProduct, { upDateProductService }  from "../../../hooks/UseUpdateProduct";


export const Updateproduct = ({ product, onUpdate }) => {
  const [open, setOpen] = useState(false);
  // const [updatedProduct, setUpdatedProduct] = useState(product);
  const [quantityAvailable,setquantityAvailable] = useState(product.quantityAvailable);
  const [price,setprice] = useState(product.price);
  const [discountPercent,setdiscountpercent] = useState(product.discountPercent);
  const [deliveryCharges,setdeliveryCharges] = useState(product.deliveryCharges);
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
    handleClose();
  };

  const [updatedProduct,setUpdatedProduct] = useState({
    quantityAvailable:'',
    price: '',
    discountPercent: '',
    deliveryCharges: ''
  })

  const handleSubmit = async(e) => {
    console.log("SUbmitted");
    e.preventDefault();
    // const [newProduct,setnewProduct] = useState({
    //   quantity:quantityAvailable,
    //   price: price,
    //   discountPercent: discountpercent,
    //   deliveryCharges: deliveryCharges
    // })
    try{
      // const { updateProduct } =  upDateProductService();
      const setUpdatedProduct = await upDateProductService().updateProduct({
        quantityAvailable:quantityAvailable,
        price:price,
        discountPercent:discountPercent,
        deliveryCharges:deliveryCharges
      },product.productId);
      // const updatedProductData = updatedProduct.data;
      // console.log(updatedProductData);
      console.log("Product updated: ",updatedProduct);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
      console.log("Error updating product");
    }
  }

  return (
    <div >
      <Button variant="contained" onClick={handleClickOpen} >Update</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <Box  style={{display:'flex',gap:'10px'}}>
          <TextField autoFocus margin="dense" label="Quantity" type="text" fullWidth  value={quantityAvailable} name='quantity' onChange={event => setquantityAvailable(event.target.value)} sx={{width:'50%'}} />
          <TextField autoFocus margin="dense" label="Price" type="text" fullWidth name='price' value={price} onChange={event => setprice(event.target.value)} sx={{width:'50%'}} />
          </Box>
          <Box  style={{display:'flex',gap:'10px'}}>
          <TextField autoFocus margin="dense" label="Discount Percent" type="text" fullWidth name="discountPercent" value={discountPercent} onChange={event => setdiscountpercent(event.target.value)} sx={{width:'50%'}} />
          <TextField autoFocus margin="dense" label="Delivery Charges" type="text" fullWidth name="deliveryCharges" value={deliveryCharges} onChange={event => setdeliveryCharges(event.target.value)} sx={{width:'50%'}} />
          </Box>      
      <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
          <Button color="primary" onClick={handleSubmit} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
