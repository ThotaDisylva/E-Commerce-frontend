import React, { useState } from "react";
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


export const Updateproduct = ({ product, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  // const {products} = useSelector(state=>state.products);

  const [categories, setCategories] = useState([
    'Electronics',
    'Clothing',
    'Furniture'  ]);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const [subcategories, setSubCategories] = useState([
    'Mobile',
    'TV',
    'Laptop'
  ]);
  const [newSubCategory, setNewSubCategory] = useState('');
  const [showNewSubCategoryInput, setShowNewSubCategoryInput] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleInputChange = (event) => {
  //   setNewCategory(event.target.value);
  // };

  const handleInputChange = (event) => {
    // setUpdatedProduct({ ...updatedProduct, [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleAddCategory = () => {
    if (updatedProduct.newCategory.trim() !== '') {
      setCategories([...categories, updatedProduct.newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleInputChangeCategory = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
    if (value.trim() !== '') {
      setCategories([...categories, value.trim()]);
      setNewCategory('');
  }
}

  const handleToggleInput = () => {
    setShowNewCategoryInput(!showNewCategoryInput);
  };

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== '') {
      setSubCategories([...subcategories, newSubCategory.trim()]);
      setNewSubCategory('');
    }
  };

  const handleInputChangeSubCategory = (event) => {
    setShowNewSubCategoryInput(!showNewSubCategoryInput);
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
    handleClose();
  };

  const handleToggleInputSubCategory = () => {
    setShowNewSubCategoryInput(true);
  };


  const handleChange = (e) => {
    // console.log('inside handle change')
    setTextFieldValue(e.target.value);
    console.log(textFieldValue)
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} >Update</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
        <Box  style={{display:'flex',gap:'10px'}}>

          <TextField autoFocus margin="dense" label="Title" type="text" fullWidth name="title" value={updatedProduct.title} onChange={handleInputChange} sx={{width:'50%'}} />
          <TextField autoFocus margin="dense" label="Sub-Title" type="text" fullWidth name="subtitle" value={updatedProduct.subtitle} onChange={handleInputChange} sx={{width:'50%'}} />
          </Box>
          <Box  style={{display:'flex',gap:'10px'}}>
          <TextField autoFocus margin="dense" label="Brand" type="text" fullWidth name="brand" value={updatedProduct.brand} onChange={handleInputChange} sx={{width:'50%'}} />
          <TextField autoFocus margin="dense" label="Quantity" type="text" fullWidth name="quantity" value={updatedProduct.quantity} onChange={handleInputChange} sx={{width:'50%'}} />
          </Box>
          <Box  style={{display:'flex',gap:'10px'}}>
          <TextField autoFocus margin="dense" label="Price" type="text" fullWidth name="price" value={updatedProduct.price} onChange={handleInputChange} sx={{width:'33%'}} />
          <TextField autoFocus margin="dense" label="Discount Percent" type="text" fullWidth name="discountedpercent" value={updatedProduct.discountedpercent} onChange={handleInputChange} sx={{width:'33%'}} />
          <TextField autoFocus margin="dense" label="Delivery Charges" type="text" fullWidth name="deliverycharges" value={updatedProduct.deliverycharges} onChange={handleInputChange} sx={{width:'33%'}} />
          </Box>      
      <br />

      <Box style={{display:'flex',gap:'10px'}}>
      <TextField select label="Category" name = "category" value={updatedProduct.category} onChange={handleInputChange} 
      fullWidth variant="outlined" readOnly={false}>
      {categories.map((category) => (<MenuItem key={category} value={category}>{category}</MenuItem>))}
      </TextField>

      {showNewCategoryInput ? (
      <TextField label="Enter New Category" value={updatedProduct.newCategory} onChange={handleInputChangeCategory} 
      fullWidth variant="outlined" readOnly={false}/>
      ) : (
      <Button onClick={handleToggleInput} variant="outlined" sx = {{mt:0}}>Add New</Button>
      )}
      {showNewCategoryInput && (
      <Button onClick={handleAddCategory} variant="contained" sx = {{mt:0}}>
        Add
      </Button>
      )}
      </Box>
      <br />

      <Box style={{display:'flex',gap:'10px'}}>

        <TextField select label="Sub Category" name = "subCategory" value={updatedProduct.subCategory} onChange={handleInputChange} fullWidth variant="outlined" readOnly={false}>
        {subcategories.map((subCategory) => (<MenuItem key={subCategory} value={subCategory}>{subCategory}</MenuItem>))}
      </TextField>

      {showNewCategoryInput ? (
        <TextField label="Enter New Sub Category" value={updatedProduct.newSubCategory} onChange={handleInputChange} fullWidth variant="outlined" readOnly={false}/>
      ) : (
        <Button onClick={handleToggleInput} variant="outlined" sx = {{mt:0}}>Add New</Button>
      )}
      {showNewCategoryInput && (
        <Button onClick={handleAddCategory} variant="contained" sx = {{mt:0}}>
          Add
        </Button>
      )}
      </Box>
    <Box>
    <TextField autoFocus margin="dense" label="Description (max characters-300)" multiline rows={4} sx={{width:'100%'}} type="text" fullWidth name="description" value={updatedProduct.description} onChange={handleInputChange}/>
    </Box>

    <Box>
    <TextField autoFocus margin="dense" label="Highlights (max characters-300)" multiline rows={4} sx={{width:'100%'}} type="text" fullWidth name="highlights" value={updatedProduct.highlights} onChange={handleInputChange}/>
    </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleUpdate} color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
