import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';


export const Addproducts = () => {

  const [categories, setCategories] = useState([
    'Electronics',
    'Clothing',
    'Furniture'  ]);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleInputChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleToggleInput = () => {
    setShowNewCategoryInput(true);
  };

  const [subcategories, setSubCategories] = useState([
    'Mobile',
    'TV',
    'Laptop'
  ]);
  const [newSubCategory, setNewSubCategory] = useState('');
  const [showNewSubCategoryInput, setShowNewSubCategoryInput] = useState(false);

  const handleInputChangeSubCategory = (event) => {
    setNewSubCategory(event.target.value);
  };

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== '') {
      setSubCategories([...subcategories, newSubCategory.trim()]);
      setNewSubCategory('');
    }
  };

  const handleToggleInputSubCategory = () => {
    setShowNewSubCategoryInput(true);
  };

  return (
    <div>
      <div className='font-bold text-3xl text-center'>Add new Product</div>
      <hr />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75%' },
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Image Url" variant="outlined" required/>
      <Box  style={{display:'flex',gap:'10px'}}>
      <TextField id="outlined-basic" label="Title" variant="outlined" sx={{width:'50%'}} required/>
      <TextField id="outlined-basic" label="Subtitle" variant="outlined" sx = {{width:'50%'}} required/>
      </Box>
      <Box  style={{display:'flex',gap:'10px'}}>
      <TextField id="outlined-basic" label="Brand" variant="outlined" sx={{width:'50%'}} required/>
      <TextField id="outlined-basic" label="Quantity" variant="outlined" sx = {{width:'50%'}} required/>
      </Box>
      <Box  style={{display:'flex',gap:'10px'}}>
      <TextField id="outlined-basic" label="Price" variant="outlined" sx={{width:'33%'}} required/>
      <TextField id="outlined-basic" label="Discounted Percent" variant="outlined" sx = {{width:'33%'}}/>
      <TextField id="outlined-basic" label="Delivery Charges" variant="outlined" sx = {{width:'33%'}} required/>
      </Box>
      <Box style={{display:'flex',gap:'10px'}}>

<TextField select label="Category" value={newCategory} onChange={handleInputChange} fullWidth variant="outlined" required>
  {categories.map((category) => (<MenuItem key={category} value={category}>{category}</MenuItem>))}
      </TextField>
      {showNewCategoryInput ? (
        <TextField label="Enter New Category" value={newCategory} onChange={handleInputChange} fullWidth variant="outlined"/>
      ) : (
        <Button onClick={handleToggleInput} variant="outlined" sx = {{mt:0}}>Add New</Button>
      )}
      {showNewCategoryInput && (
        <Button onClick={handleAddCategory} variant="contained" sx = {{mt:0}}>Add</Button>
      )}
      </Box>
      <Box style={{display:'flex',gap:'10px'}}>

<TextField select label="SubCategory" value={newSubCategory} onChange={handleInputChangeSubCategory} fullWidth variant="outlined" required>
  {subcategories.map((subcategory) => (<MenuItem key={subcategory} value={subcategory}>{subcategory}</MenuItem>))}
      </TextField>
      {showNewSubCategoryInput ? (
        <TextField label="Enter New Sub Category" value={newSubCategory} onChange={handleInputChangeSubCategory} fullWidth variant="outlined"/>
      ) : (
        <Button onClick={handleToggleInputSubCategory} variant="outlined" sx = {{mt:0}}>Add New</Button>
      )}
      {showNewSubCategoryInput && (
        <Button onClick={handleAddSubCategory} variant="contained" sx = {{mt:0}}>Add</Button>
      )}
      </Box>
      <Box>
      <TextField id="outlined-multiline-static" label="Description (max characters-300)"multiline rows={4} sx={{width:'100%'}} required/>
      </Box>
      <Box>
      <TextField id="outlined-multiline-static" label="Highlights (max characters-300)" multiline rows={4} sx={{width:'100%'}} required/>
      </Box>
      <Button variant="contained">Add to Products</Button>
    </Box>
    </div>
  )
}
// export default Addproducts
